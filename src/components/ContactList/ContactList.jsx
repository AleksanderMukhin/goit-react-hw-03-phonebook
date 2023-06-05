import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contactList, handelDelet }) => {
  let cnts = contactList();
  console.log(cnts);

  return (
    <ul>
      {cnts.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <span className={css.item_name}>{name}:</span>
            <span className={css.item_number}>{number}</span>
            <button onClick={() => handelDelet(id)} type="button">
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.func.isRequired,
  handelDelet: PropTypes.func.isRequired,
};
