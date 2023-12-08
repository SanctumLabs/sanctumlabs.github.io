import { FC } from "react";
import Avatar from "./Avatar";

type AvatarGroupProps = {
    avatars: PostAuthor[]
}

const AvatarGroup: FC<AvatarGroupProps> = ({ avatars }) => {
    return (
        <div className="avatar-group">
            {(avatars || []).map((avatar, index) => {
                return (
                    <Avatar key={index.toString()} avatar={avatar} />
                );
            })}
        </div>
    );
};

export default AvatarGroup;
