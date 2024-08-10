'use client'

import React from 'react';
import { useIntersection } from 'react-use';
import { Title } from './title';
import { ProductCard } from './productCard';
import { Categories } from './categories';
import { useCategoryStore } from '@/store/category';

interface Props {
  title: string;
  items: any[];
  categoryID: number;
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({ title, items, className, categoryID, listClassName }) => {
    const setActiveCategoryID = useCategoryStore((state) => state.setActiveID);
    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
     });

    React.useEffect(() => {
        if(intersection?.isIntersecting){
            setActiveCategoryID(categoryID)
        }
    }, [categoryID, intersection?.isIntersecting, title]);


  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className="grid grid-cols-3 gap-[50px]">
        {items.map((item, i) => (
          <ProductCard
            id={item.id}
            key={item.id}
            name={item.name}
            imageUrl={item.url}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};