// =================================================================
//Add Money:
document.getElementById("money").addEventListener("click", function(){
    // Remove other Tabs elements and all
    // cash out
    document.getElementById("cash").classList.remove("bg-[#0874F2]");
    document.getElementById("cashTextId").classList.remove("text-[#ffffff]");
    document.getElementById("cashOut").classList.add("hidden");
    
    // Transfer money
    document.getElementById("Transfer").classList.remove("bg-[#0874F2]");
    document.getElementById("transferTextId").classList.remove("text-[#ffffff]");
    document.getElementById("TransferMoney").classList.add("hidden");

    // Bonus
    document.getElementById("bonusmenu").classList.remove("bg-[#0874F2]");
    document.getElementById("bonusMenuId").classList.remove("text-[#ffffff]");
    document.getElementById("Bonus").classList.add("hidden");

    // Bill Pay
    document.getElementById("billpaY").classList.remove("bg-[#0874F2]");
    document.getElementById("payBillId").classList.remove("text-[#ffffff]");
    document.getElementById("billPay").classList.add("hidden");

    // Transaction History
    document.getElementById("transaction").classList.remove("bg-[#0874F2]");
    document.getElementById("TransactionId").classList.remove("text-[#ffffff]");
    document.getElementById("tnxHist").classList.add("hidden");
// ==========================================================================
    const moneyTab = document.getElementById("money");
    moneyTab.classList.toggle("bg-[#0874F2]");
    document.getElementById("addMoneyId").classList.toggle("text-[#ffffff]");
    document.getElementById("addMoney").classList.toggle("hidden");
    document.getElementById("addMoney").scrollIntoView({ behavior: "smooth" });
    
    document.getElementById("btnAddMoney").addEventListener("click", function(event){
        event.preventDefault();
        const accountNumber = document.getElementById("AccNo").value;
        const amount = document.getElementById("amnt").value;
        const pin = document.getElementById("pin").value;
        const channel = document.getElementById("Bank").selectedIndex;

        if (!amount || !pin ||!accountNumber || !channel) {
            Swal.fire("Error!", "Please fill each box", "error");
            return;
        }

        if(accountNumber.length === 11){
            if(amount > 0){
                if(pin === "1234"){
                    let currentMoney = document.getElementById("totalMoney").innerText;
                    const currentMoneyInt = parseInt(currentMoney);
                    const amountInt = parseInt(amount);
                    const sum = currentMoneyInt + amountInt;
                    document.getElementById("totalMoney").innerText = sum;

                    Swal.fire("Added!", "Your money has been added.", "success");

                    const transactionWrapper = document.getElementById("transactionsWrapper");

                    const clickedTime = new Date();
                    const formattedTime = clickedTime.toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true
                    });

                    const card = document.createElement("div");
                    card.className = "card bg-base-100 w-[402px] h-[70.5px] max-w-sm shrink-0 shadow-2xl rounded-2xl flex flex-row items-center gap-5";

                    // inner HTML of the card with wallet image, transaction text, and 3-dot icon
                    card.innerHTML = `
                    <div class="w-[45.5px] h-[50px] rounded-full overflow-hidden flex items-center justify-center bg-white pl-2">
                        <img src="./asset/wallet1.png" alt="wallet" class="w-80% h-95% object-contain" />
                    </div>
                    <div class="w-[200px] flex flex-col gap-1">
                        <h1 class="font-[outfit] font-semibold text-sm text-[#08080890]">${document.getElementById("money").innerText}</h1>
                        <p class="font-[outfit] font-normal text-xs text-[#08080870]">Today ${formattedTime}</p>
                    </div>
                    <div class="pl-10">
                        <img class="h-[24px] w-[24px]" src="./asset/ThreeDot.png" alt="Threedot">
                    </div>
                    `;

                    transactionWrapper.appendChild(card);
                }
            }
        }
        document.getElementById("AccNo").value = '';
        document.getElementById("amnt").value = '';
        document.getElementById("pin").value = '';
        document.getElementById("Bank").selectedIndex = 0;
    })
})

// CashOut
document.getElementById("cash").addEventListener("click", function(){
    // Remove other Tabs elements and all
    // Add money
    document.getElementById("money").classList.remove("bg-[#0874F2]");
    document.getElementById("addMoneyId").classList.remove("text-[#ffffff]");
    document.getElementById("addMoney").classList.add("hidden");

    // Transfer money
    document.getElementById("Transfer").classList.remove("bg-[#0874F2]");
    document.getElementById("transferTextId").classList.remove("text-[#ffffff]");
    document.getElementById("TransferMoney").classList.add("hidden");

    // Bonus
    document.getElementById("bonusmenu").classList.remove("bg-[#0874F2]");
    document.getElementById("bonusMenuId").classList.remove("text-[#ffffff]");
    document.getElementById("Bonus").classList.add("hidden");

    // Bill Pay
    document.getElementById("billpaY").classList.remove("bg-[#0874F2]");
    document.getElementById("payBillId").classList.remove("text-[#ffffff]");
    document.getElementById("billPay").classList.add("hidden");

    // Transaction History
    document.getElementById("transaction").classList.remove("bg-[#0874F2]");
    document.getElementById("TransactionId").classList.remove("text-[#ffffff]");
    document.getElementById("tnxHist").classList.add("hidden");
// ================================================================================
    const cashTab = document.getElementById("cash");
    cashTab.classList.toggle("bg-[#0874F2]");
    document.getElementById("cashTextId").classList.toggle("text-[#ffffff]");
    document.getElementById("cashOut").classList.toggle("hidden");
    document.getElementById("cashOut").scrollIntoView({ behavior: "smooth" });

    document.getElementById("btnWithdrawMoney").addEventListener("click", function(event){
        event.preventDefault();
        const agentNo = document.getElementById("AgntNo").value;
        const agentAmount = document.getElementById("Agntamnt").value;
        const agentPin = document.getElementById("Agntpin").value;

        if (!agentNo || !agentAmount ||!agentPin) {
            Swal.fire("Error!", "Please fill each box", "error");
            return;
        }


        if(agentNo.length === 11){
            if(agentAmount > 0){
                if(agentPin === "1234"){
                    const totalCurrentBalance = document.getElementById("totalMoney").innerText;
                    const convertedTotalCurrentBalance = parseInt(totalCurrentBalance);
                    const convertedAgentAmount = parseInt(agentAmount);
                    const sumOfEvery = convertedTotalCurrentBalance - convertedAgentAmount;

                    document.getElementById("totalMoney").innerText = sumOfEvery;

                    Swal.fire("Sent!", "Your money has been sent.", "success");

                    const transactionWrapper = document.getElementById("transactionsWrapper");

                    const clickedTime = new Date();
                    const formattedTime = clickedTime.toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true
                    });

                    const card = document.createElement("div");
                    card.className = "card bg-base-100 w-[402px] h-[70.5px] max-w-sm shrink-0 shadow-2xl rounded-2xl flex flex-row items-center gap-5";

                    // inner HTML of the card with wallet image, transaction text, and 3-dot icon
                    card.innerHTML = `
                    <div class="w-[45.5px] h-[50px] rounded-full overflow-hidden flex items-center justify-center bg-white pl-2">
                        <img src="./asset/wallet1.png" alt="wallet" class="w-80% h-95% object-contain" />
                    </div>
                    <div class="w-[200px] flex flex-col gap-1">
                        <h1 class="font-[outfit] font-semibold text-sm text-[#08080890]">${document.getElementById("cash").innerText}</h1>
                        <p class="font-[outfit] font-normal text-xs text-[#08080870]">Today ${formattedTime}</p>
                    </div>
                    <div class="pl-10">
                        <img class="h-[24px] w-[24px]" src="./asset/ThreeDot.png" alt="Threedot">
                    </div>
                    `;

                    transactionWrapper.appendChild(card);
                }
                
            }
            
        }
        

        document.getElementById("AgntNo").value = '';
        document.getElementById("Agntamnt").value = '';
        document.getElementById("Agntpin").value = '';
    })
})

// Transfer money
document.getElementById("Transfer").addEventListener("click", function(){
    // Remove other Tabs elements and all
    // Add money
    document.getElementById("money").classList.remove("bg-[#0874F2]");
    document.getElementById("addMoneyId").classList.remove("text-[#ffffff]");
    document.getElementById("addMoney").classList.add("hidden");

    // Cashout
    document.getElementById("cash").classList.remove("bg-[#0874F2]");
    document.getElementById("cashTextId").classList.remove("text-[#ffffff]");
    document.getElementById("cashOut").classList.add("hidden");

    // Bonus
    document.getElementById("bonusmenu").classList.remove("bg-[#0874F2]");
    document.getElementById("bonusMenuId").classList.remove("text-[#ffffff]");
    document.getElementById("Bonus").classList.add("hidden");

    // Bill Pay
    document.getElementById("billpaY").classList.remove("bg-[#0874F2]");
    document.getElementById("payBillId").classList.remove("text-[#ffffff]");
    document.getElementById("billPay").classList.add("hidden");

    // Transaction History
    document.getElementById("transaction").classList.remove("bg-[#0874F2]");
    document.getElementById("TransactionId").classList.remove("text-[#ffffff]");
    document.getElementById("tnxHist").classList.add("hidden");
// ===============================================================================
    
    const transferTab = document.getElementById("Transfer");
    transferTab.classList.toggle("bg-[#0874F2]");
    document.getElementById("transferTextId").classList.toggle("text-[#ffffff]");
    document.getElementById("TransferMoney").classList.toggle("hidden");
    document.getElementById("TransferMoney").scrollIntoView({ behavior: "smooth" });

    document.getElementById("btnSendNow").addEventListener("click", function(event){
        event.preventDefault();
        const UserAccNo = document.getElementById("transferAcc").value;
        const UserAmount = document.getElementById("TransferAmount").value;
        const UserPin = document.getElementById("TransferPin").value;

        if (!UserAccNo || !UserAmount ||!UserPin) {
            Swal.fire("Error!", "Please fill each box", "error");
            return;
        }

        if(UserAccNo.length === 11){
            if(UserAmount > 0){
                if(UserPin === "1234"){
                    const totalCurrentBalancetransaction = document.getElementById("totalMoney").innerText;
                    const convertedTotalCurrentBalanceTransaction = parseInt(totalCurrentBalancetransaction);
                    const convertedUserAmount = parseInt(UserAmount);
                    const sumOfEveryTransaction = convertedTotalCurrentBalanceTransaction - convertedUserAmount;

                    document.getElementById("totalMoney").innerText = sumOfEveryTransaction;

                    Swal.fire("Transfered!", "Your money has been transfered.", "success");
                    
                    const transactionWrapper = document.getElementById("transactionsWrapper");

                    const clickedTime = new Date();
                    const formattedTime = clickedTime.toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true
                    });

                    const card = document.createElement("div");
                    card.className = "card bg-base-100 w-[402px] h-[70.5px] max-w-sm shrink-0 shadow-2xl rounded-2xl flex flex-row items-center gap-5";

                    // inner HTML of the card with wallet image, transaction text, and 3-dot icon
                    card.innerHTML = `
                    <div class="w-[45.5px] h-[50px] rounded-full overflow-hidden flex items-center justify-center bg-white pl-2">
                        <img src="./asset/wallet1.png" alt="wallet" class="w-80% h-95% object-contain" />
                    </div>
                    <div class="w-[200px] flex flex-col gap-1">
                        <h1 class="font-[outfit] font-semibold text-sm text-[#08080890]">${document.getElementById("Transfer").innerText}</h1>
                        <p class="font-[outfit] font-normal text-xs text-[#08080870]">Today ${formattedTime}</p>
                    </div>
                    <div class="pl-10">
                        <img class="h-[24px] w-[24px]" src="./asset/ThreeDot.png" alt="Threedot">
                    </div>
                    `;

                    transactionWrapper.appendChild(card);
                }
            }
        }

        document.getElementById("transferAcc").value = '';
        document.getElementById("TransferAmount").value = '';
        document.getElementById("TransferPin").value = '';
    })
})

//  Get Bonus
document.getElementById("bonusmenu").addEventListener("click", function () {
    // Remove other Tabs elements and all
    // Add money
    document.getElementById("money").classList.remove("bg-[#0874F2]");
    document.getElementById("addMoneyId").classList.remove("text-[#ffffff]");
    document.getElementById("addMoney").classList.add("hidden");

    // Cashout
    document.getElementById("cash").classList.remove("bg-[#0874F2]");
    document.getElementById("cashTextId").classList.remove("text-[#ffffff]");
    document.getElementById("cashOut").classList.add("hidden");

    // Transfer money
    document.getElementById("Transfer").classList.remove("bg-[#0874F2]");
    document.getElementById("transferTextId").classList.remove("text-[#ffffff]");
    document.getElementById("TransferMoney").classList.add("hidden");

    // Bill Pay
    document.getElementById("billpaY").classList.remove("bg-[#0874F2]");
    document.getElementById("payBillId").classList.remove("text-[#ffffff]");
    document.getElementById("billPay").classList.add("hidden");

    // Transaction History
    document.getElementById("transaction").classList.remove("bg-[#0874F2]");
    document.getElementById("TransactionId").classList.remove("text-[#ffffff]");
    document.getElementById("tnxHist").classList.add("hidden");
    //================================================================================
      const bonusTab = document.getElementById("bonusmenu");
      bonusTab.classList.toggle("bg-[#0874F2]");
      document.getElementById("bonusMenuId").classList.toggle("text-[#ffffff]");
      document.getElementById("Bonus").classList.toggle("hidden");
      document.getElementById("Bonus").scrollIntoView({ behavior: "smooth" });
    });

    // Handle Coupon Submission
    document.getElementById("btnGetBonus").addEventListener("click", function (event) {
      event.preventDefault();

      const bonusCoupon = document.getElementById("BonusCoupon").value.trim();
      const alertContainer = document.getElementById("bonusAlertContainer");

      // Clear previous alert
      alertContainer.innerHTML = '';
      
      if (bonusCoupon.length !== 5 && bonusCoupon !== 'Abc25') {
            Swal.fire("Error!", "Please fill with right coupon", "error");
            return;
      }

      if (bonusCoupon.length === 5 && bonusCoupon === 'Abc25') {
        const alertHTML = `
        <div role="alert" class="alert alert-success mt-2 flex items-center gap-2 bg-green-200 text-green-800 p-3 rounded-3xl">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Your bonus has been applied!</span>
        </div>`;
        alertContainer.innerHTML = alertHTML;

        Swal.fire("Added!", "Your coupon has been added.", "success");

        const transactionWrapper = document.getElementById("transactionsWrapper");

                    const clickedTime = new Date();
                    const formattedTime = clickedTime.toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true
                    });

                    const card = document.createElement("div");
                    card.className = "card bg-base-100 w-[402px] h-[70.5px] max-w-sm shrink-0 shadow-2xl rounded-2xl flex flex-row items-center gap-5";

                    // inner HTML of the card with wallet image, transaction text, and 3-dot icon
                    card.innerHTML = `
                    <div class="w-[45.5px] h-[50px] rounded-full overflow-hidden flex items-center justify-center bg-white pl-2">
                        <img src="./asset/wallet1.png" alt="wallet" class="w-80% h-95% object-contain" />
                    </div>
                    <div class="w-[200px] flex flex-col gap-1">
                        <h1 class="font-[outfit] font-semibold text-sm text-[#08080890]">${document.getElementById("bonusmenu").innerText}</h1>
                        <p class="font-[outfit] font-normal text-xs text-[#08080870]">Today ${formattedTime}</p>
                    </div>
                    <div class="pl-10">
                        <img class="h-[24px] w-[24px]" src="./asset/ThreeDot.png" alt="Threedot">
                    </div>
                    `;

                    transactionWrapper.appendChild(card);
      }

      document.getElementById("BonusCoupon").value = '';
    });

// Bill Pay
document.getElementById("billpaY").addEventListener("click", function(){
    // Remove other Tabs elements and all
    // Add money
    document.getElementById("money").classList.remove("bg-[#0874F2]");
    document.getElementById("addMoneyId").classList.remove("text-[#ffffff]");
    document.getElementById("addMoney").classList.add("hidden");

    // cash out
    document.getElementById("cash").classList.remove("bg-[#0874F2]");
    document.getElementById("cashTextId").classList.remove("text-[#ffffff]");
    document.getElementById("cashOut").classList.add("hidden");
    
    // Transfer money
    document.getElementById("Transfer").classList.remove("bg-[#0874F2]");
    document.getElementById("transferTextId").classList.remove("text-[#ffffff]");
    document.getElementById("TransferMoney").classList.add("hidden");

    // Bonus
    document.getElementById("bonusmenu").classList.remove("bg-[#0874F2]");
    document.getElementById("bonusMenuId").classList.remove("text-[#ffffff]");
    document.getElementById("Bonus").classList.add("hidden");

    // Transaction History
    document.getElementById("transaction").classList.remove("bg-[#0874F2]");
    document.getElementById("TransactionId").classList.remove("text-[#ffffff]");
    document.getElementById("tnxHist").classList.add("hidden");
// ==========================================================================
    let payTab = document.getElementById("billpaY");
    payTab.classList.toggle("bg-[#0874F2]");
    document.getElementById("payBillId").classList.toggle("text-[#ffffff]");
    document.getElementById("billPay").classList.toggle("hidden");
    document.getElementById("billpaY").scrollIntoView({ behavior: "smooth" });
    
    document.getElementById("btnPayNowBill").addEventListener("click", function(event){
        event.preventDefault();
        const BilleraccountNumber = document.getElementById("BillAccNo").value;
        const Billamount = document.getElementById("Payamnt").value;
        const Billpin = document.getElementById("billpin").value;
        const channel2 = document.getElementById("payBank").selectedIndex;

        if (!BilleraccountNumber || !Billamount ||!Billpin || !channel2) {
            Swal.fire("Error!", "Please fill each box", "error");
            return;
        }

        if(BilleraccountNumber.length === 11){
            if(Billamount > 0){
                if(Billpin === "1234"){
                    let BillcurrentMoney = document.getElementById("totalMoney").innerText;
                    const BillcurrentMoneyInt = parseInt(BillcurrentMoney);
                    const BillamountInt = parseInt(Billamount);
                    const Billsum = BillcurrentMoneyInt - BillamountInt;
                    document.getElementById("totalMoney").innerText = Billsum;

                    Swal.fire("Paid!", "Your bill has been paid.", "success");
                    
                    const transactionWrapper = document.getElementById("transactionsWrapper");

                    const clickedTime = new Date();
                    const formattedTime = clickedTime.toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true
                    });

                    const card = document.createElement("div");
                    card.className = "card bg-base-100 w-[402px] h-[70.5px] max-w-sm shrink-0 shadow-2xl rounded-2xl flex flex-row items-center gap-5";

                    // inner HTML of the card with wallet image, transaction text, and 3-dot icon
                    card.innerHTML = `
                    <div class="w-[45.5px] h-[50px] rounded-full overflow-hidden flex items-center justify-center bg-white pl-2">
                        <img src="./asset/wallet1.png" alt="wallet" class="w-80% h-95% object-contain" />
                    </div>
                    <div class="w-[200px] flex flex-col gap-1">
                        <h1 class="font-[outfit] font-semibold text-sm text-[#08080890]">${document.getElementById("billpaY").innerText}</h1>
                        <p class="font-[outfit] font-normal text-xs text-[#08080870]">Today ${formattedTime}</p>
                    </div>
                    <div class="pl-10">
                        <img class="h-[24px] w-[24px]" src="./asset/ThreeDot.png" alt="Threedot">
                    </div>
                    `;

                    transactionWrapper.appendChild(card);
                }
            }
        }
        document.getElementById("BillAccNo").value = '';
        document.getElementById("Payamnt").value = '';
        document.getElementById("billpin").value = '';
        document.getElementById("payBank").selectedIndex = 0;
    })
})

// Transaction History
document.getElementById("transaction").addEventListener("click", function(){
    // Remove other Tabs elements and all
    // Add money
    document.getElementById("money").classList.remove("bg-[#0874F2]");
    document.getElementById("addMoneyId").classList.remove("text-[#ffffff]");
    document.getElementById("addMoney").classList.add("hidden");

    // cash out
    document.getElementById("cash").classList.remove("bg-[#0874F2]");
    document.getElementById("cashTextId").classList.remove("text-[#ffffff]");
    document.getElementById("cashOut").classList.add("hidden");
    
    // Transfer money
    document.getElementById("Transfer").classList.remove("bg-[#0874F2]");
    document.getElementById("transferTextId").classList.remove("text-[#ffffff]");
    document.getElementById("TransferMoney").classList.add("hidden");

    // Bonus
    document.getElementById("bonusmenu").classList.remove("bg-[#0874F2]");
    document.getElementById("bonusMenuId").classList.remove("text-[#ffffff]");
    document.getElementById("Bonus").classList.add("hidden");

    // Bill Pay
    document.getElementById("billpaY").classList.remove("bg-[#0874F2]");
    document.getElementById("payBillId").classList.remove("text-[#ffffff]");
    document.getElementById("billPay").classList.add("hidden");

    // ============================================================================
    const tnx = document.getElementById("transaction");
    tnx.classList.toggle("bg-[#0874F2]");
    document.getElementById("TransactionId").classList.toggle("text-[#ffffff]");
    document.getElementById("tnxHist").classList.toggle("hidden");
    document.getElementById("tnxHist").scrollIntoView({ behavior: "smooth" });
})

// Logout
document.getElementById("logout").addEventListener("click", function(){
    window.location.href = "/index.html";
})