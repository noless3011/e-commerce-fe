import InfoCard from "./InfoCard";

const Info = () => {
    return (<div className="flex-1">
        <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">Personal information</h2>
            <p className="text-gray-600 text-sm">
                Manage your personal information, including phone numbers and email adress where you can be contacted
            </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Name */}
            <InfoCard title="Name" value="Irakli talavadze" />

            {/* Date of Birth */}
            <InfoCard title="Date of Birth" value="07 July 1993" />
            {/* Country Region */}
            <InfoCard title="Country Region" value="Georgia , Tbilisi" />

            {/* Language */}
            <InfoCard title="Language" value="English ( UK ) - English" />
        </div>

        {/* Contactable at */}
        <InfoCard title="Contactable at" value="Something something" />
    </div>)
}
export default Info;