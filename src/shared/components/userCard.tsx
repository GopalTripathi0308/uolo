import Image from "next/image";

type UserCardProps = {
  user: {
    id: number;
    firstName: string;
    email: string;
    avatar: string;
  };
  onDelete: (id: number) => void;
};

const UserCard = ({ user, onDelete }: UserCardProps) => {
  const { id, firstName, email, avatar } = user;

  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-4 shadow-sm">
      <Image src={avatar} alt={firstName} width={40} height={40} />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{firstName}</h3>
        <p className="text-gray-600">{email}</p>
      </div>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default UserCard;
