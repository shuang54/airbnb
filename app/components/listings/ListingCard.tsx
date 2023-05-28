'use client';

import { Listing, Reservation } from "@prisma/client";
import { SafeListing, SafeUser } from "../../types";
import { useRouter } from "next/navigation";
import useCountries from "../../Hooks/useCountries";
import { useCallback, useMemo } from "react";
import { format } from 'date-fns'
import Image from "next/image";
import HeartButton from "../HeartButton";
import Button from "../Button";

interface ListingProps {
  data: SafeListing;
  reservation?: Reservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null ;
}

const ListingCard: React.FC<ListingProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();
  const location = getByValue(data.locationValue);

  const handleCancel = useCallback((
    e: React.MouseEvent<HTMLButtonElement>
  )=>{
    e.stopPropagation();

    if(disabled){
      return;
    }

    onAction?.(actionId);
  },[actionId,onAction,disabled])

  const price = useMemo(()=>{
    if(reservation){
      return reservation.totalPrice;
    }
    return data.price
  },[reservation,data])

  const reservationData = useMemo(()=>{
    if(!reservation){
      return null;
    }

    const start = new Date(reservation.startDate)
    const end = new Date(reservation.endDate)

    return `${format(start,'PP')} - ${format(end,'PP')}`;
  },[reservation])
  return (
    <div
      onClick={()=> router.push(`/listings/${data.id}`)}
      className=" col-span-1 cursor-pointer group"
    >
      <div
        className=" aspect-square w-full relative overflow-hidden rounded-xl"
      >
        <Image 
          fill
          alt="Listing"
          src={data.imageSrc}
          className=" object-cover h-full w-full group-hover:scale-110 transition"
        />
        <div className=" absolute top-3 right-3">
          <HeartButton
            listingId={data.id}
            currentUser={currentUser}
          />
        </div>
      </div>

      {/* 国家地区 */}
      <div className=" font-semibold text-lg">
        {location?.region},{location?.label}
      </div>

      {/* 分类 */}
      <div className="font-light text-neu-500">
        {reservationData || data.category}
      </div>

      {/* 价格 */}
      <div className="flex flex-row items-center gap-1">
        <div className=" font-semibold">
          $ {price}
        </div>
        {!reservation && (
          <div className="font-light"> night</div>
        )}
      </div>
      {onAction && actionLabel && (
        <Button 
          disabled={disabled}
          small
          label={actionLabel}
          onClick={handleCancel}
        />
      )}
    </div>
  );
}
 
export default ListingCard;