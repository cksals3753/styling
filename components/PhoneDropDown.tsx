
export const PhoneDropDown = ({ value, setIsOpen, setPhoneIdentify, isOpen } : any) => {
    const ValueClick = () => {
        setIsOpen(!isOpen);
        setPhoneIdentify(value);
    }

    return <li onClick={ValueClick}>{value}</li>
}