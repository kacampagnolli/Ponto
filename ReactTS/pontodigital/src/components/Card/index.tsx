import * as React from 'react';
import { Card, CardText, CardTitle, CardActions, CardHeader } from 'material-ui/Card';
import Theme from '../../theme';
import { styles } from './style';
import { CardType } from '../../types';

interface Props {
    cardTitle?: CardType;
    cardText?: CardType;
    cardActions?: JSX.Element;
    cardHeader?: CardType;
}

const CardComponent: React.SFC<Props> = (props) => {
    const { cardTitle, cardText, cardActions, cardHeader } = props;
    return(
        <div style={styles.div}>
            <Card >
                {
                    cardHeader &&
                    <CardHeader 
                        style={{backgroundColor: Theme.palette.primary1Color}}
                    > 
                        {cardHeader.element} 
                    </CardHeader>
                }
                {
                    cardTitle &&
                    <CardTitle 
                        title={cardTitle.title}
                        subtitle={cardTitle.subtitle}
                        titleColor={Theme.palette.textColor}
                        subtitleColor={Theme.palette.accent1Color}
                    > 
                        {cardTitle.element} 
                    </CardTitle>
                }
                {
                    cardText &&
                    <CardText> {cardText.element} </CardText>
                }
                {
                    cardActions &&
                    <CardActions> cardActions </CardActions>
                }
            </Card>
        </div>
    );
};

export default CardComponent;
