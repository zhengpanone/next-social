# 1. 使用官方的Node.js镜像作为基础镜像
FROM node:18-alpine AS builder

# 2. 设置工作目录
WORKDIR /app

# 3. 安装 pnpm
RUN npm config set registry https://registry.npmmirror.com/ && npm install -g pnpm

# 4. 设置淘宝镜像
RUN pnpm config set registry https://registry.npmmirror.com/

# 5. 复制 pnpm 的配置文件和依赖文件到容器中
COPY pnpm-lock.yaml ./
COPY package.json ./
COPY .env ./


# 6. 安装依赖
RUN pnpm install --frozen-lockfile

# 7. 复制所有源代码到容器中
COPY . .

# 8. 构建 Next.js 应用
RUN pnpm run build

# 9. 仅拷贝必要的文件创建生产镜像
FROM node:18-alpine AS production

# 10. 设置工作目录
WORKDIR /app

# 11. 安装 pnpm 并设置淘宝镜像
RUN npm install -g pnpm \
    && pnpm config set registry https://registry.npmmirror.com/

# 12. 复制 pnpm 的配置文件和依赖文件
COPY pnpm-lock.yaml ./
COPY package.json ./


# 13. 安装生产依赖
RUN pnpm install --prod --frozen-lockfile

# 14. 从 builder 阶段复制构建后的文件
COPY --from=builder /app/.env ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# 15. 设置环境变量
ENV NODE_ENV=production
ENV PORT=3000

# 16. 暴露服务端口
EXPOSE 3000

# 17. 启动 Next.js 应用
CMD ["pnpm", "start"]
