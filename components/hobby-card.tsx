import Image from 'next/image';

interface HobbyCardProps {
  name: string;
  src: string;
}

export const HobbyCard = ({ name, src }: HobbyCardProps) => {
  return (
    <div className="aspect-square h-auto w-full overflow-hidden rounded-lg bg-black">
      <Image
        src={src}
        alt={name}
        className="relative h-full w-full object-cover"
        fill
      />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-4xl font-extrabold">
        {name}
      </div>
    </div>
  );
};
