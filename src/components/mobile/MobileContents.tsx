import { MainCover } from '../MainCover';
import { CountDown } from '../CountDown';
import { Greeting } from '../Greeting';
import { Profile } from '../Profile';
import { Album } from '../Album';
import { PartyInvitaion } from '../PartyInvitaion';
import { AttendanceForm } from '../AttendanceForm';
import Information from '../Information';

export function MobileContents() {
  return (
    <>
      <MainCover />
      <CountDown />
      <Greeting />
      <Profile />
      <Album />
      <PartyInvitaion />
      <Information />
      <AttendanceForm />
    </>
  );
}
