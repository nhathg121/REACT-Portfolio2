import "./portfolio.sass";

const items = [
  {
    id: 1,
    title: "React Comerce",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit asperiores earum quos possimus fuga rerum ex quis, explicabo dolore dolores, impedit voluptatem iusto modi. Repellat rerum eligendi quod veniam ipsum.",
  },
  {
    id: 2,
    title: "React Comerce",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit asperiores earum quos possimus fuga rerum ex quis, explicabo dolore dolores, impedit voluptatem iusto modi. Repellat rerum eligendi quod veniam ipsum.",
  },
  {
    id: 3,
    title: "React Comerce",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit asperiores earum quos possimus fuga rerum ex quis, explicabo dolore dolores, impedit voluptatem iusto modi. Repellat rerum eligendi quod veniam ipsum.",
  },
  {
    id: 4,
    title: "React Comerce",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit asperiores earum quos possimus fuga rerum ex quis, explicabo dolore dolores, impedit voluptatem iusto modi. Repellat rerum eligendi quod veniam ipsum.",
  },
];

const Single = ({ item }) => {
  return <section>{item.title}</section>;
};
const Pofolio = () => {
  return (
    <div className="Pofolio">
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Pofolio;
