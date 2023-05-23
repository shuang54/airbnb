import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(()=>{
    let currentQuery = {};
    
    // 如果存在params，使用qs解析
    if(params){
      currentQuery = qs.parse(params.toString())
    }

    // 定义更新后的查询参数对象
    const updatedQuery: any = {
      ...currentQuery,
      category: label
    }

    // 如果点击的内容是当前页的label，就删除label
    if(params?.get('category') === label){
      delete updatedQuery.category;
    }

    // 使用qs定义url
    const url = qs.stringifyUrl({
      url:'/',
      query: updatedQuery
    },{skipNull:true})

    router.push(url);
  },[router,label,params])

  return ( 
  <div
    onClick={handleClick}
    className={`
      flex
      flex-col
      items-center
      justify-center
      gap-2
      p-3
      border-b-2
      hover:text-neutral-800
      transition
      cursor-pointer
      ${selected ? 'border-b-neutral-800' : 'border-transparent'}
      ${selected ? 'text-neutral-800' : 'text-neutral-500'}
    `}
  >
    <Icon size={26} />
  </div>
   );
}
 
export default CategoryBox;