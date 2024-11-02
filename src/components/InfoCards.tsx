import "./style.scss";


interface InfoCardProps {
  label: string;
  value: number | string;
  icon?: React.ReactNode; 
}

const InfoCard: React.FC<InfoCardProps> = ({ label, value,icon }) => {
  return (
    <div className="infoCard">
        {icon && <div className="infoCardIcon">{icon}</div>}
        <div className="infoCardLabel">{label}</div>
        <div className="infoCardValue">{value}</div>
    </div>
  );
};

export default InfoCard;
