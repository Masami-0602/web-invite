import { MainCover } from '../MainCover';
import { CountDown } from '../CountDown';
import { Greeting } from '../Greeting';
import { Profile } from '../Profile';
import { Album } from '../Album';
import { PartyInvitaion } from '../PartyInvitaion';

export function MobileContents() {
  return (
    <>
      <MainCover />
      <CountDown />
      <Greeting />
      <Profile />
      <Album />
      <PartyInvitaion />
    </>
  );
}
