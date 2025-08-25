'use client';
import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function RegistrationPopup({
  buttonText = 'Register Now',
  reopenDate = '15th September',
}) {
  const [open, setOpen] = useState(false);

  // Optional: lock background scroll while modal is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => (document.body.style.overflow = prev);
    }
  }, [open]);

  return (
    <>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary to-[#263B93] shadow hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#263B93]"
      >
        {buttonText}
      </button>

      {/* Modal */}
      <Transition show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          {/* Overlay */}
          <Transition.Child
            as={Fragment}
            enter="transition duration-200 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          {/* Panel */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="transition duration-200 ease-out"
                enterFrom="opacity-0 translate-y-2 scale-95"
                enterTo="opacity-100 translate-y-0 scale-100"
                leave="transition duration-150 ease-in"
                leaveFrom="opacity-100 translate-y-0 scale-100"
                leaveTo="opacity-0 translate-y-2 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
                  {/* Close */}
                  <div className="flex justify-end">
                    <button
                      onClick={() => setOpen(false)}
                      className="rounded-full p-2 text-gray-500 hover:bg-gray-100 focus:outline-none"
                      aria-label="Close"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 6 6 18M6 6l12 12"/></svg>
                    </button>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-3">
                    <Dialog.Title className="text-xl md:text-2xl font-semibold text-[#20205B]">
                      Registration Temporarily Closed
                    </Dialog.Title>
                    <p className="text-[15px] text-[#4D4D70]">
                      We’ll be back soon!
                    </p>
                    <p className="text-[15px] text-[#4D4D70]">
                      Registration reopens on <span className="font-semibold">{reopenDate}</span>. Stay tuned!
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="my-5 h-px bg-gray-200" />

                  {/* Form area (replace with your real form) */}
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      Leave your details and we’ll notify you as soon as registration opens.
                    </p>

                    {/* START: Replace this block with your own form */}
                    <form
                      className="space-y-3"
                      onSubmit={(e) => {
                        e.preventDefault();
                        // handle submit
                        setOpen(false);
                      }}
                    >
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#263B93]"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#263B93]"
                      />
                      <button
                        type="submit"
                        className="w-full rounded-2xl bg-[#263B93] text-white px-4 py-3 text-sm font-semibold hover:opacity-95"
                      >
                        Notify Me
                      </button>
                    </form>
                    {/* END: Replace block */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
