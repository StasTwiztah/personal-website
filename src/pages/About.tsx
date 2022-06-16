import { css } from "@emotion/css";
import {
  Card,
  CardMedia,
  Grow,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useStyles } from "../styles/hooks/useStyles";
import StarBorderIcon from "@mui/icons-material/StarBorder";

type Technology = {
  name: string;
  isFavourite?: boolean;
  dateStarted: Date;
  dateEnded?: Date;
  description?: string;
  search?: string[];
};

const aboutStyles = (theme: Theme) => ({
  technologies: css`
    margin-top: 32px;
  `,

  items: css`
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 0;
    gap: 16px;

    @media (max-width: ${theme.breakpoints.values.lg}px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${theme.breakpoints.values.md}px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${theme.breakpoints.values.sm}px) {
      grid-template-columns: repeat(1, 1fr);
    }
  `,
  itemName: css`
    flex: 1;
  `,
  card: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    gap: 24px;
  `,
  favouriteIcon: css`
    color: ${theme.palette.warning.light};
  `,
});

export const About = () => {
  const { t } = useTranslation();
  const styles = useStyles(aboutStyles);

  const technologies: Technology[] = [
    {
      name: "React",
      isFavourite: true,
      dateStarted: new Date(),
      search: ["react"],
    },
    {
      name: "HTML",
      dateStarted: new Date(),
      search: ["html"],
    },
    {
      name: "CSS",
      dateStarted: new Date(),
      search: ["css"],
    },
    {
      name: "JavaScript",
      dateStarted: new Date(),
      search: ["js", "javascript"],
    },
    {
      name: "TypeScript",
      isFavourite: true,
      dateStarted: new Date(),
      search: ["ts", "typescript"],
    },
  ];

  const [search, setSearch] = useState("");

  return (
    <>
      <Typography variant="h2" component="h2">
        {t("about.title")}
      </Typography>
      <Typography variant="subtitle1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla hendrerit
        quam sed tempus accumsan. Fusce ac nunc a tortor maximus ultrices quis
        ac ligula. Phasellus finibus, sem sed finibus porta, tortor lorem
        aliquet risus, vel fermentum velit odio nec dui. Cras quis turpis
        faucibus augue feugiat tincidunt molestie in est. Proin ante neque,
        blandit ac luctus non, lobortis ac nunc. Mauris ornare faucibus
        lobortis. Morbi elementum sapien vitae ipsum commodo malesuada. Nullam
        faucibus eros eget ante ullamcorper, vitae convallis metus tempus.
        Curabitur non tristique odio. Donec cursus, dui ac sagittis condimentum,
        justo velit cursus purus, ut efficitur erat lorem a mi. Donec a varius
        dolor. Cras metus mauris, ultricies quis arcu quis, maximus dapibus
        lectus. Duis id velit sit amet diam volutpat facilisis. Vestibulum
        pellentesque arcu in mi luctus, at interdum elit ullamcorper. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Fusce sollicitudin metus dui, eu gravida massa fringilla
        non.
      </Typography>
      <div className={styles.technologies}>
        <TextField
          fullWidth
          label={t("search")}
          placeholder={t("search")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className={styles.items}>
          {technologies
            .filter((x) =>
              x.search?.find((s) =>
                s.toLowerCase().includes(search.toLowerCase())
              )
            )
            .sort((a, b) => {
              return a.isFavourite === b.isFavourite
                ? 0
                : a.isFavourite
                ? -1
                : 1;
            })
            .map((item, index) => (
              <Grow in timeout={(index + 2) * 100}>
                <li className={styles.item}>
                  <Card key={item.name} className={styles.card}>
                    <CardMedia
                      component="img"
                      sx={{ width: 48, height: 48 }}
                      image={`/assets/images/${item.name.toLowerCase()}-logo.svg`}
                      alt={`${item.name} logo`}
                    />
                    <Typography variant="h5" className={styles.itemName}>
                      {item.name}
                    </Typography>
                    {item.isFavourite && (
                      <StarBorderIcon className={styles.favouriteIcon} />
                    )}
                  </Card>
                </li>
              </Grow>
            ))}
        </ul>
      </div>
    </>
  );
};
