import { formatter } from "../util/investment";

export const ResultElem = (props) => {
  return (
    <li className="result-elem">
      <span>{props.year}</span>
      <span>{formatter.format(props.investValue)}</span>
      <span>{formatter.format(props.intYear)}</span>
      <span>{formatter.format(props.total)}</span>
      <span>{formatter.format(props.invCap)}</span>
    </li>
  );
};
