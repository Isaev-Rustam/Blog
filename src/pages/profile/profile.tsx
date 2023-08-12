import { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ProfileProps {}
const Profile: FC<ProfileProps> = () => (
  <div data-testid="profile" className="text">
    Profile
  </div>
);

export default Profile;
