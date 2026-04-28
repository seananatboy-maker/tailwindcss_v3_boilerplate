const main = (() => {

   function websiteInfo() {
      console.log('Welcome to our website!')
   }

   // Auto Running When Load. masukan fungsi yg anda buat disini jika ingin fungsi langsung aktif.
   function autoRun() {
      websiteInfo();
   }
   autoRun();
   // End Auto Running When Load

   // Callback Function Here Ex: main.websiteInfo()
   return {
      websiteInfo
   }

})()