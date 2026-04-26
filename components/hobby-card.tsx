import Image from 'next/image';

interface HobbyCardProps {
  name: string;
  src: string;
}

export const HobbyCard = ({ name, src }: HobbyCardProps) => {
  return (
    <div className="aspect-square h-auto w-full overflow-hidden rounded-lg bg-black">
      <Image src={src} alt={name} className="h-full w-full object-cover" fill />
    </div>
  );
};
