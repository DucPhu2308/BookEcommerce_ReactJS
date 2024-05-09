import UserApi from "../../../API/User/UserApi";
import DefaultLayout from "../../../layouts/DefaultLayout/DefaultLayout";
import "./ProfileUser.css";
import AvatarPlaceholder from '@/assets/images/account.png';
import MyButton from "../../../components/common/MyButton/MyButton";
import BookItemMui from "./BookItemMui";
import { UserContext } from "@/providers/UserProvider";

import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Container, Typography, Stack, Divider, Grid } from "@mui/material";

const ProfileUser = () => {
  const navigate = useNavigate();
  const { idUser } = useParams();
  const [profile, setProfile] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await UserApi.getProfileUser(idUser);
        console.log(response.data.data);
        setProfile(response.data.data);
      } catch (error) {
        console.log("Failed to fetch user: ", error);
      }
    };
    fetchUser();
  }, [idUser]);

  const handleFollowClick = async () => {
    const res = await UserApi.followUser(idUser);
    if (res.status === 200) {
      if (profile.follow) {
        profile.user_follow -= 1;
      } else {
        profile.user_follow += 1;
      }
      setProfile({ ...profile, follow: !profile.follow });
    } else {
      console.log("Failed to follow user");
    }
  };
  return (
    <DefaultLayout>
      <div className="container_user-info">
        <Container>
          <div className="profile-box">
            <div className="image-box">
              <img className="round-image" src={profile.avatar || AvatarPlaceholder} alt="avatar" />
            </div>
            <div className="info-box">
              <Typography variant="h4">{profile.displayName}</Typography>
              <Stack
                direction="row"
                spacing={2}
                divider={<Divider orientation="vertical" flexItem />}
              >
                <div>
                  <Typography variant="body1">
                    {profile.user_follow} người theo dõi ‧ {profile.own?.length}{" "}
                    đầu sách
                  </Typography>
                  {user?.id == idUser ? (
                    <Link to="/my-books">
                      <MyButton style={{ marginTop: "10px" }}>Quản lý sách</MyButton>
                    </Link>
                  ) : (
                    <MyButton
                      onClick={handleFollowClick}
                      reverseColor={profile.follow ? true : false}
                    >
                      {profile.follow ? 'Bỏ theo dõi' : 'Theo dõi'}
                    </MyButton>
                  )}
                </div>
                <div>
                  <Typography style={{ fontStyle: "italic" }} variant="body1">
                    Giới thiệu về tôi:
                  </Typography>
                  <Typography variant="body1">
                    {profile.introduction}
                  </Typography>
                </div>
              </Stack>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <Typography variant="h5" style={{ marginTop: "20px" }}>
          Các đầu sách
        </Typography>
        <Grid container>
          {profile.own?.map((book, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <BookItemMui book={book} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </DefaultLayout>
  );
};

export default ProfileUser;
