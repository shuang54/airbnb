import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb'
import { FaSkiing } from 'react-icons/fa'
import { IoIosAirplane } from 'react-icons/io'
import { BsSnow } from 'react-icons/bs'
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCavalry, GiCaveEntrance, GiForestCamp, GiIbis, GiIsland, GiWindmill } from 'react-icons/gi'
import { MdOutlineVilla } from 'react-icons/md'
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is close to the beach!'
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'This property has windmills!'
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This property is modern'
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'This property is in the Countryside!'
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'This property has a pool!'
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'This property is on an island!'
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This property is close a lake!'
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'This property has skiing activities!'
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'This property is in a castle!'
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'This property has camping activities!'
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    description: 'This property has camping activities!'
  },
  {
    label: 'Cave',
    icon: GiCaveEntrance,
    description: 'This property is in a cave!'
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'This property is in a desert!'
  },
  {
    label: 'Barns',
    icon: GiBarn,
    description: 'This property is in the Barns!'
  },
  {
    label: 'Lux',
    icon: IoIosAirplane,
    description: 'This property is luxurious!'
  },
  
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();

  const isMainPage = pathname === '/'

  if(!isMainPage){
    return null
  }

  return ( 
    <Container>
      <div 
        className=" pt-4 flex flex-ro justify-between over-x-auto"
      >
        {categories.map((item)=>(
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={ category === item.label }
          ></CategoryBox>
        ))}
      </div>
    </Container>
   );
}
 
export default Categories;