import InfoText from '../components/InfoText';
import PhoneContent from '../components/PhoneContent';

export default function HomePage() {
  return (
    <div className="w-full font-sans h-screen ">
      <div className="flex justify-evenly py-2 sm:py-14 flex-row sm:mx-10">
        <InfoText />
        <PhoneContent />
      </div>
    </div>
  );
}
