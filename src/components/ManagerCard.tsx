interface ManagerCardProps {
  imageUrl: string;
  name: string;
}

const ManagerCard: React.FC<ManagerCardProps> = ({ imageUrl, name }) => {
  return (
    <div className="w-[299px] h-[470px]  flex-col justify-start items-start inline-flex">
      <img
        className="w-[299px] h-[354px] rounded-3xl"
        src={imageUrl}
        alt="manager card"
      />
      <div className="flex-col justify-start items-start gap-3 flex">
        <div className="text-black text-[28px] font-normal leading-[48px]">
          {name}
        </div>
        <div className="text-neutral-500 text-xl font-normal font-['Open Sans'] leading-loose">
          General Manager
        </div>
      </div>
    </div>
  );
};

export default ManagerCard;
