import Image from "next/image";
import Link from "next/link";

const UserMediaCard = ({ userId }: { userId?: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href={`/${userId}`} className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* botton */}
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/28102471/pexels-photo-28102471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/28102471/pexels-photo-28102471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/28102471/pexels-photo-28102471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/28102471/pexels-photo-28102471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/28102471/pexels-photo-28102471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/28102471/pexels-photo-28102471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/28102471/pexels-photo-28102471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/28102471/pexels-photo-28102471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default UserMediaCard;
