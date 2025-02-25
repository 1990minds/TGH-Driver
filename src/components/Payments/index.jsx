import React, { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { FaMoneyBillTransfer } from "react-icons/fa6";
import SVG from '../../assets/upi_logo_icon_169316.svg'
import { useSelector } from "react-redux";
import { driverSelector } from "../../api/driver";
import { keyUri } from "../../key";
import axios from "axios";


function EarningsPage() {
    const [activeTab, setActiveTab] = useState("all")
    const [transactionTab, setTransactionTab] = useState("all")
    // const { driver } = useSelector(driverSelector);
    const [user, setuser] = useState({});
    const [userData, setUserData] = useState(null);
    // console.log(driver)

    useEffect(() => {
        const fetchData = async () => {
          try {
            console.log("usr roi user hoai", user?._json?.email);
            const user_phone = localStorage.getItem("phoneNumber")
              ? localStorage.getItem("phoneNumber")
              : null;
            console.log(user_phone);
    
            if (user_phone) {
              const response = await axios.post(
                `${keyUri.BACKEND_URI}/api/getdriverfromphone`,
                { phone: user_phone }
              );
              console.log("API response 🎈🎃🎠", response.data);
              localStorage.setItem("Driver", response.data.driver._id);
              setUserData(response?.data?.driver);
              localStorage.setItem("authToken", response.data.token);
            } else {
              console.error("phone number is not available.");
            }
          } catch (err) {
            console.error("Error occurred while creating driver:", err);
          }
        };
    
        fetchData();
      }, []);
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            {/* <header className="flex items-center justify-between p-4 bg-white">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold">Earnings</h1>
        </div>
        <Button variant="outline" className="rounded-full">
          Help
        </Button>
      </header> */}

            {/* Main Tabs */}
            <div className="w-full bg-gray-100 p-1">
                <div className="grid w-full grid-cols-2 gap-1">
                    <button
                        onClick={() => setActiveTab("all")}
                        className={`py-2 px-4 rounded-full ${activeTab === "all" ? "bg-[#062D51] text-white" : ""}`}
                    >
                        All Earnings
                    </button>
                    <button
                        onClick={() => setActiveTab("wallet")}
                        className={`py-2 px-4 rounded-full ${activeTab === "wallet" ? "bg-[#062D51] text-white" : ""}`}
                    >
                        Wallet
                    </button>
                </div>
            </div>


            <Card className="m-4 p-6">
                <div className="text-center">
                    <div className="text-3xl font-semibold text-red-500">₹{parseFloat(userData?.wallet_amount?.$numberDecimal)}</div>
                    <div className="text-red-500 mt-2">Your wallet balance</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6 border-t pt-4">
                    <div className="text-center">
                        <div className="bg-gray-100 w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-2">
                            <span className="text-2xl"> <img src={SVG} className="h-10 w-10" /></span>
                        </div>
                        <div className="font-medium">Add Account</div>
                    </div>
                    <div className="text-center">
                        <div className="bg-gray-100 w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-2">
                            <span className="text-2xl"><FaMoneyBillTransfer className="h-6 w-6" /></span>
                        </div>
                        <div className="font-medium">Transfer Left: 3</div>
                    </div>
                </div>
            </Card>


            <div className="mx-4 p-4 bg-white rounded-lg flex items-center justify-between">
                <div className="text-gray-600 text-sm">Do you know Money Transfer renews every Monday?</div>
                <Button variant="link" className="text-blue-500">
                    Learn more
                </Button>
            </div>


            <div className="mt-6 p-4">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">Transaction History</h2>
                    <Button variant="outline">Filter</Button>
                </div>

                <div className="flex gap-6 border-b mb-6">
                    <button
                        className={`pb-2 ${transactionTab === "all" ? "border-b-2 border-black font-medium" : "text-gray-500"}`}
                        onClick={() => setTransactionTab("all")}
                    >
                        All transactions
                    </button>
                    <button
                        className={`pb-2 ${transactionTab === "pending" ? "border-b-2 border-black font-medium" : "text-gray-500"}`}
                        onClick={() => setTransactionTab("pending")}
                    >
                        Pending
                    </button>
                </div>


                <div className="text-center py-8">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">📝</div>
                    <div className="text-gray-500">No Pending Transaction</div>
                </div>
            </div>
        </div>
    )
}

export default EarningsPage


