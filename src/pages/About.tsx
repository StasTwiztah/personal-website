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
import DangerousIcon from "@mui/icons-material/Dangerous";
import { differenceInYears } from "date-fns";

type Technology = {
  name: string;
  isFavourite?: boolean;
  dateStarted: Date;
  dateEnded?: Date;
  description?: string;
  search?: string[];
  icon?: string;
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

    @media (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  `,
  description: css`
    flex: 1;
    display: flex;
    flex-direction: column;
  `,
  card: css`
    color: ${theme.palette.primary.main} !important;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px 8px 8px;
    gap: 24px;
  `,
  favouriteIcon: css`
    color: ${theme.palette.warning.light};
  `,
  tooltip: css`
    :hover {
      cursor: help;
    }
  `,
  stoppedIcon: css`
    color: ${theme.palette.error.main};
  `,
  years: css`
    color: ${theme.palette.primary.light};
  `,
});

export const About = () => {
  const { t } = useTranslation();
  const styles = useStyles(aboutStyles);

  const technologies: Technology[] = [
    {
      name: "React",
      isFavourite: true,
      dateStarted: new Date(2017, 12, 1),
      search: ["react"],
    },
    {
      name: "TypeScript",
      isFavourite: true,
      dateStarted: new Date(2017, 12, 1),
      search: ["ts", "typescript"],
    },
    {
      name: "HTML",
      dateStarted: new Date(2015, 1, 1),
      search: ["html"],
    },
    {
      name: "CSS",
      dateStarted: new Date(2015, 1, 1),
      search: ["css"],
    },
    {
      name: "JavaScript",
      dateStarted: new Date(2017, 12, 1),
      search: ["js", "javascript"],
    },
    {
      name: "Git",
      dateStarted: new Date(2015, 1, 1),
      search: ["git"],
    },
    {
      name: "PostgreSQL",
      dateStarted: new Date(2017, 12, 1),
      search: ["postgresql", "pg"],
      icon: "/assets/images/postgres-logo.png",
    },
    {
      name: "PHP",
      dateStarted: new Date(2022, 5, 23),
      search: ["php"],
    },
    {
      name: "MS SQL",
      dateStarted: new Date(2015, 1, 1),
      dateEnded: new Date(2020, 1, 12),
      search: ["ms sql server", "microsoft sql server"],
      icon: "/assets/images/mssql-logo.svg",
    },
    {
      name: "C#",
      icon: "/assets/images/csharp-logo.svg",
      dateStarted: new Date(2015, 1, 1),
      dateEnded: new Date(2020, 1, 12),
      search: ["c#", "csharp"],
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
            .map((item, index) => {
              const years = differenceInYears(
                item.dateEnded || new Date(),
                item.dateStarted
              );

              return (
                <Grow in timeout={(index + 10) * 100}>
                  <li>
                    <Card key={item.name} className={styles.card}>
                      <CardMedia
                        component="img"
                        sx={{ height: 48, width: 48, objectFit: "contain" }}
                        image={
                          item.icon ||
                          `/assets/images/${item.name.toLowerCase()}-logo.svg`
                        }
                        alt={`${item.name} logo`}
                      />
                      <div className={styles.description}>
                        <Typography variant="h6">{item.name}</Typography>
                        <Typography
                          variant="subtitle2"
                          className={styles.years}
                        >
                          {years > 1
                            ? t("experience-years", { years })
                            : t("experience-years-less")}
                        </Typography>
                      </div>

                      {item.isFavourite && (
                        <StarBorderIcon className={styles.favouriteIcon} />
                      )}
                      {item.dateEnded && (
                        <div
                          title={`Not interested since ${item.dateEnded.getFullYear()}`}
                          className={styles.tooltip}
                        >
                          <DangerousIcon className={styles.stoppedIcon} />
                        </div>
                      )}
                    </Card>
                  </li>
                </Grow>
              );
            })}
        </ul>
      </div>
    </>
  );
};
