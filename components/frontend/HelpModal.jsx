
"use client";
import Link from "next/link";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HelpCircle,Headphones,Truck, CornerDownLeft} from 'lucide-react';
export default function HelpModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="flex items-center space-x-1 text-green-800 dark:text-green-600">
    <HelpCircle/>
  <span>Help</span>
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)} >
        <Modal.Header>Need help, with Experts</Modal.Header>
        <Modal.Body>
        <div className="grid grid-cols-2">
          <Link href="#" className="flex items-center space-x-1 text-green-800 dark:text-green-600">
         <div className="flex items-center w-8 h-8 justify-center rounded-full">
          <Headphones className="w-4 h-4"/>
         </div>
          <span>call: +255616258409</span>
          </Link>
          <Link href="#" className="flex items-center space-x-1 text-green-800 dark:text-green-600">
           <div className="flex items-center w-8 h-8 justify-center rounded-full">
          <Truck className="w-4 h-4"/>
         </div>
          <span>Truck orders</span>
          </Link>
          <Link href="#" className="flex items-center space-x-1 text-green-800 dark:text-green-600">
     
           <div className="flex items-center w-8 h-8 justify-center rounded-full">
          <CornerDownLeft className="w-4 h-4"/>
         </div>
          <span>Help</span>
          </Link>
          <Link href="#" className="flex items-center space-x-1 text-green-800 dark:text-green-600">
          <div className="flex items-center w-8 h-8 justify-center rounded-full">
          <HelpCircle className="w-4 h-4"/>
         </div>
          <span>Help</span>
          </Link>
        </div>
        </Modal.Body>
        </Modal>
    </>
  );
}
