import { css } from "@emotion/css";
import { Box, Grow, Paper, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useStyles } from "../styles/hooks/useStyles";

const contactStyles = () => ({
  logos: css`
    flex: 1;
    padding: 80px 192px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
  `,
  link: css`
    flex: 1;
    text-align: center;
  `,
  logo: css`
    max-height: 180px;
    transition-duration: 300ms;
    :hover {
      transform: scale(1.2);
      transition-duration: 300ms;
      opacity: 0.9;
    }
  `,
});

export const Contact = () => {
  const styles = useStyles(contactStyles);
  const { t } = useTranslation();

  const links = ["linkedin", "telegram", "facebook", "instagram"];

  return (
    <>
      <Typography variant="h1" component="h2">
        {t("contact.title")}
      </Typography>
      <div className={styles.logos}>
        {links.map((item, index) => (
          <Grow in timeout={(index + 2) * 500}>
            <Link to="" key={item} className={styles.link}>
              <img
                src={`/assets/images/${item}-logo.svg`}
                className={styles.logo}
              />
            </Link>
          </Grow>
        ))}
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus mi,
        finibus ac molestie a, tincidunt et sapien. Maecenas auctor feugiat
        finibus. Fusce eu lacus vitae mi vulputate vehicula vitae eget justo.
        Quisque sit amet quam mattis, porta risus sit amet, dignissim urna.
        Aenean ipsum arcu, sagittis in erat at, aliquet elementum metus. Quisque
        ullamcorper, quam in porta ornare, quam diam pretium dolor, ut
        sollicitudin mauris risus sit amet neque. Aliquam mollis neque quis
        ultrices tempor. Phasellus quis metus vehicula, accumsan neque a,
        euismod nibh. Suspendisse porta efficitur augue. Nam varius ultricies
        leo, et sollicitudin erat vulputate non. Mauris dapibus sodales metus,
        eget convallis sapien rutrum quis. Suspendisse tempor turpis ligula, ac
        faucibus nisl finibus quis. Vivamus fermentum lacus leo, ac semper augue
        tempor tempus. Vestibulum non sapien non nulla molestie pretium. Nulla
        bibendum vulputate eros quis consectetur. Suspendisse molestie bibendum
        mauris, eu imperdiet lacus mattis et. Nunc magna lectus, gravida id ante
        mollis, tempus dapibus mi. Vestibulum accumsan quam eu tincidunt
        vehicula. Aenean ut accumsan nulla, ut ultricies eros. Ut sollicitudin
        finibus pretium. Maecenas eget iaculis tellus. Sed tincidunt ex et velit
        semper, vel bibendum ante ornare. Cras risus massa, molestie nec
        suscipit vitae, condimentum at dui. Aliquam quis nisl nibh. Praesent
        vitae tristique ligula. Cras eget interdum nunc. Vestibulum fermentum
        ante risus, et facilisis diam malesuada sed. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Sed
        eleifend viverra pharetra. Nullam efficitur elit id magna viverra
        varius. Etiam nec malesuada neque. Aenean malesuada sollicitudin
        malesuada. Curabitur lacus orci, consectetur eu luctus ut, fermentum ut
        dolor. Nullam scelerisque mollis nibh non posuere. Sed fermentum nec
        nisi in interdum. Nam dignissim erat eu sem placerat, id vulputate nulla
        fermentum. Quisque velit neque, elementum eget nulla nec, consectetur
        vehicula risus. Aliquam erat volutpat. Suspendisse eget gravida felis.
        Nam pharetra enim sit amet volutpat fermentum. Proin sagittis, lectus ac
        tempor accumsan, ante erat mollis dui, porttitor molestie sapien velit
        id turpis. Donec imperdiet mauris sed turpis pretium iaculis. Aliquam
        dignissim non tortor non scelerisque. Vivamus suscipit velit orci, non
        efficitur neque pharetra eget. Etiam finibus, nibh in elementum
        interdum, enim mi consectetur augue, nec porttitor elit quam at purus.
        Quisque ex erat, luctus id viverra sit amet, interdum sit amet turpis.
        Curabitur vestibulum nisl eu fringilla accumsan. Quisque nisi nulla,
        vehicula eu urna eget, malesuada tempus leo. Etiam pharetra ex ornare
        est tincidunt, sed tincidunt felis ultricies. Vivamus id hendrerit
        purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia curae; Curabitur tristique lorem lectus, vel egestas
        felis dictum id. Phasellus ligula orci, tincidunt ut mi a, dapibus
        tempor odio. Nam quam urna, egestas sit amet lacinia sit amet, aliquet
        at sapien. Donec at eleifend est. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Sed congue
        elementum tortor id tincidunt. Vestibulum ex ipsum, mollis non arcu
        quis, mattis tempor elit. Nullam vel metus ac est rutrum imperdiet. Sed
        ultricies lacus quis luctus interdum.
      </p>
    </>
  );
};
