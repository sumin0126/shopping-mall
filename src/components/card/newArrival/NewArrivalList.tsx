import NewArrivalCard from '@/components/card/newArrival/newArrivalCard';

interface IProps {
  id: number;
  img: string;
  itemName: string;
  itemColor: string;
  itemPrice: string;
}

interface INewArrivalListProps {
  NewArrivalItem: IProps[];
}

const NewArrivalList = ({ NewArrivalItem }: INewArrivalListProps) => {
  return (
    <div className="new-arrival-list-container">
      {NewArrivalItem.map(item => (
        <NewArrivalCard
          key={item.id}
          img={item.img}
          itemName={item.itemName}
          itemColor={item.itemColor}
          itemPrice={item.itemPrice}
        />
      ))}
    </div>
  );
};

export default NewArrivalList;
