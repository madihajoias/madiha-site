import Image from 'next/image';

type DiamondTweezersIllustrationProps = {
  className?: string;
  showGuides?: boolean;
};

export default function DiamondTweezersIllustration({
  className = '',
}: DiamondTweezersIllustrationProps) {
  return (
    <div
      className={`
        relative
        flex
        items-center
        justify-center
        ${className}
      `}
    >
      <Image
        src="/illustrations/diamond-tweezers.png"
        alt=""
        width={1200}
        height={1200}
        className="
          h-auto
          w-full
          object-contain
        "
        priority
      />
    </div>
  );
}