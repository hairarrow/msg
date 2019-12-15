import React, { FC, HTMLProps } from "react";
import ProfileThumbnail from "./UserProfileThumbnailStyles";

export interface IUserProfileThumbnail {
	profileSrc: string;
}

const UserProfileThumbnail: FC<HTMLProps<HTMLSpanElement> &
	IUserProfileThumbnail> = ({ profileSrc, width = 24, height = 24 }) => (
	<ProfileThumbnail
		style={{ width, height, minWidth: width, minHeight: height }}
	>
		<img className="profile-image" src={profileSrc} alt="Person Name" />
	</ProfileThumbnail>
);

export default UserProfileThumbnail;
