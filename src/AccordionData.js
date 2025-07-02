import { useState, UseState } from "react";
const AccordionData = ({ items }) => {
  return (
    <div>
      {items.map((val, index) => {
        const [openIndex, setOpenIndex] = useState(null);
        const isOpen = openIndex === index;
        const isNested = Array.isArray(val.content);
        const handleClick = (index) => {
          setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
        };
        return (
          <div className="accordion-item" key={index}>
            <div className="accrodion-title" onClick={() => handleClick(index)}>
              <span>{val.title}</span>
              <span>{isOpen ? "-" : "+"}</span>
            </div>
            <div className={`accordion-content  ${isOpen ? "open " : ""}`}>
              {isOpen &&
                (isNested ? (
                  <AccordionData items={val.content} />
                ) : (
                  <span>{val.content}</span>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccordionData;
