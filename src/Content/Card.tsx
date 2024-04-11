import React, { useEffect, useState } from "react";
import { Text, Button,  Grid, Anchor, Tooltip } from "@mantine/core";
import "./card.css";
import {
  IconAt,
  IconPhoneCall,
  IconStar,
  IconTrash,
  IconUserMinus,
  IconUserPlus,
  IconWorld,
} from "@tabler/icons-react";
import axios from "axios";

const Card = (props: any) => {
  const [isFollow, setIsFollow] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const { user } = props;

  useEffect(() => {
    const generateAvatar = async () => {
      try {
        const response = await axios.get(
          `https://api.dicebear.com/7.x/initials/svg?seed=${user?.name}`
        );
        setAvatarUrl(response?.data);
      } catch (error) {
        console.error(error);
      }
    };

    generateAvatar();
  }, [user?.name]);
  console.log(user, "user");
  console.log("url", avatarUrl);

  const handleDelete = () => {
    props.onDelete(user?.id);
  };

  const handleEmailClick = (email: any) => {
    window.open(`https://mail.google.com/mail/?view=cm&to=${email}`, "_blank");
  };

  const handleWebsiteClick = (website: any) => {
    if (!website.startsWith("http://") && !website.startsWith("https://")) {
      website = "http://" + website;
    }
    window.open(website, "_blank");
  };

  const handlePhoneClick = () => {    
    window.open("_blank");
  };
  return (
    <Grid className="mainCardGrid">
      <Grid.Col>
        <Tooltip arrowSize={4} label={user?.name} withArrow position="top">
          <div
            className="user-avatar"
            dangerouslySetInnerHTML={{ __html: avatarUrl }}
          />
        </Tooltip>
      </Grid.Col>
      <Text className="nameGrid" size="lg" fw={600}>
        {user?.name} {isFollow && <IconStar stroke={2} size={18} />}
      </Text>
      <Grid.Col>
        <Anchor
          style={{ display: "flex", alignItems: "center", color: "#6C757D", marginBottom: "0.5rem"  }}
          onClick={() => handleEmailClick(user?.email)}
        >
          <IconAt stroke={2} size={16} />
          {user?.email}
        </Anchor>
        <Anchor
          style={{ display: "flex", alignItems: "center", color: "#6C757D", marginBottom: "0.5rem"  }}
          onClick={handlePhoneClick}
        >
          <IconPhoneCall stroke={2} size={16} />
          {user?.phone}
        </Anchor>
        <Anchor
          style={{ display: "flex", alignItems: "center", color: "#6C757D", marginBottom: "0.5rem"  }}
          onClick={() => handleWebsiteClick(user?.website)}
        >
          <IconWorld stroke={2} size={16} />
          {user?.website}
        </Anchor>
      </Grid.Col>
      <Grid.Col className="user-actions">
        <Button
          size="sm"
          variant={!isFollow ? "filled" : "outline"}
          style={{ paddingRight: "2vw", paddingLeft: "2vw" }}
          leftSection={
            !isFollow ? (
              <IconUserPlus stroke={2} size={18} />
            ) : (
              <IconUserMinus stroke={2} size={18} />
            )
          }
          onClick={() => {
            setIsFollow(!isFollow);
          }}
        >
          {!isFollow ? "Follow" : "Unfollow"}
        </Button>
        <Button
          size="sm"
          variant="outline"
          color="red"
          style={{ paddingRight: "2vw", paddingLeft: "2vw" }}
          leftSection={<IconTrash stroke={2} size={18} />}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Grid.Col>
    </Grid>
  );
};

export default Card;
