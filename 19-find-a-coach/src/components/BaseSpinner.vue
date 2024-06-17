<style scoped>
@keyframes lds-roller {
   0% {
      transform: rotate(0deg);
   }
   100% {
      transform: rotate(360deg);
   }
}
.lds-roller {
   & div {
      animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      transform-origin: 40px 40px;
   }
}

.lds-roller div:after {
   content: " ";
   @apply block absolute w-[7px] h-[7px] rounded-full bg-[#3d008d] -mt-4 -ml-4;
}
.lds-roller div:nth-child(1) {
   animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
   @apply top-[63px] left-[63px];
}
.lds-roller div:nth-child(2) {
   animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
   @apply top-[68px] left-[56px];
}
.lds-roller div:nth-child(3) {
   animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
   @apply top-[71px] left-[48px];
}
.lds-roller div:nth-child(4) {
   animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
   @apply top-[72px] left-[40px];
}
.lds-roller div:nth-child(5) {
   animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
   @apply top-[71px] left-[32px];
}
.lds-roller div:nth-child(6) {
   animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
   @apply top-[68px] left-[24px];
}
.lds-roller div:nth-child(7) {
   animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
   @apply top-[63px] left-[17px];
}
.lds-roller div:nth-child(8) {
   animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
   @apply top-[56px] left-[12px];
}
</style>

<template>
   <div class="flex items-center justify-center w-full">
      <div class="relative inline-block w-[80px] h-[80px]">
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
      </div>
   </div>
</template>
