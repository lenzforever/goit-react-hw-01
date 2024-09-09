import css from "./Profile.module.css";

const ProfileCard = ({ name, tag, location, avatar, stats }) => {
  return (
        <div className={css.profileCard}>
    <div className={css.profileDetails}>
        <img className={css.profileImage} src={avatar} alt={`${name}'s avatar`} />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>
      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span>Followers: </span>
          <span className={css.statValue}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span>Views: </span>
          <span className={css.statValue}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes: </span>
          <span className={css.statValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileCard;
