import { UsersContainerProps } from "@/types/types";
import User from "./User";

const UsersContainer: React.FC<UsersContainerProps> = ({ users }) => {
  return (
    <div className="w-11/12 mt-32 grid gap-10 p-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:p-1 xl:p-10 sm:p-10 sm:mt-40">
      {users.map((user) => {
        return <User user={user} key={user.login.uuid} />;
      })}
    </div>
  );
};

export default UsersContainer;
