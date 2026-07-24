import { useState } from "react";
import "./Branches.css";

import {
    FiSearch,
    FiMapPin,
    FiPhone,
    FiNavigation,
    FiMap,
} from "react-icons/fi";
import Navbar from "../../components/Common/Navbar/Navbar";

const Branches = () => {
    const [search, setSearch] = useState("");

    const branches = [
        {
            name: "Jaipur Jhotwara Branch",
            status: "Open",
            hours: "Open till 4:00 PM",
            address: "Plot No. 123, Main Market, Jhotwara, Jaipur, Rajasthan",
            phone: "1800 5700",
        },
        {
            name: "Jaipur C-Scheme Branch",
            status: "Open",
            hours: "Open till 4:00 PM",
            address: "22 Ashoka Marg, C-Scheme, Jaipur, Rajasthan",
            phone: "1800 5700",
        },
        {
            name: "Jaipur Malviya Nagar Branch",
            status: "Closed",
            hours: "Opens at 10:00 AM",
            address: "Sector 5, Malviya Nagar, Jaipur, Rajasthan",
            phone: "1800 5700",
        },
    ];

    const filteredBranches = branches.filter(
        (branch) =>
            branch.name.toLowerCase().includes(search.toLowerCase()) ||
            branch.address.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <>
            <Navbar />
            <div className="branches-page">
                <div className="branches-header">
                    <h1>Locate a Branch</h1>
                    <p>
                        Find the nearest Bank of Baroda branch or ATM near you
                    </p>
                </div>

                <div className="branches-search">
                    <FiSearch />

                    <input
                        type="text"
                        placeholder="Search by branch name or area..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="branches-grid">
                    <div className="branches-list">
                        {filteredBranches.map((branch, index) => (
                            <div className="branch-card" key={index}>
                                <div className="branch-top">
                                    <h3>{branch.name}</h3>

                                    <span
                                        className={
                                            branch.status === "Open"
                                                ? "status open"
                                                : "status closed"
                                        }
                                    >
                                        {branch.status}
                                    </span>
                                </div>

                                <p className="branch-hours">{branch.hours}</p>

                                <p className="branch-address">
                                    <FiMapPin />
                                    {branch.address}
                                </p>

                                <div className="branch-actions">
                                    <button className="branch-btn primary">
                                        <FiNavigation />
                                        Directions
                                    </button>

                                    <button className="branch-btn">
                                        <FiPhone />
                                        Call
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="branches-map">
                        <FiMap />
                        <span>Map view</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Branches;
