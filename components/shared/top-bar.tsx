import { cn } from '@/lib/utils';
import { Container } from './container';
import React, { FC } from 'react'
import { Categories } from './categories';
import { SortPopup } from './sort-popup';

interface Props {
  className?: string;
}

const topBar: FC<Props> = ({ className }) => {
  return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
        <Container className='flex items-center justify-between'>
            <Categories/>
            <SortPopup/>
        </Container>
    </div>
  )
}

export default topBar;