import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';
import SingUp from './formUser.js'
import Category from './formCategory'
import Team from './formTeam.js'
/**
 * It is possible to specify your own step connector by passing an element to the `connector`
 * prop. If you want to remove the connector, pass `null` to the `connector` prop.
 */

const styles ={
     widthCard:{
       width:400
  }
}
class CustomStepConnector extends React.Component {
  constructor(props) {
    super(props);

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }


  state = {
    stepIndex: 0,
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <SingUp width={styles.widthCard}/>
        );

      case 1:
        return (
          <Category width={styles.widthCard}/>
        );
        
        case 2:
        return (
          <Team width={styles.widthCard}/>
        );
    }
  }

  handleNext() {
    const {stepIndex} = this.state;

    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  }

  handlePrev() {
    const {stepIndex} = this.state;

    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }else{
      this.props.history.push('/ponto/configuracoes/usuarios');
    }
  }

  render() {
    const {stepIndex} = this.state;

    return (
      <div style={{width:700}}>
        <Stepper activeStep={stepIndex} connector={<ArrowForwardIcon />}>
          <Step>
            <StepLabel>Dados</StepLabel>
          </Step>

          <Step>
            <StepLabel>Categoria</StepLabel>
          </Step>

          <Step>
            <StepLabel>Equipe</StepLabel>
          </Step>
        </Stepper>
        <div style={{display:'flex',flexFlow:'row',justifyContent:'center'}}>
        {this.getStepContent(stepIndex)}
        </div>
        <div style={{marginTop: 24, marginBottom: 12, display:'flex', flexFlow:'row', justifyContent:'space-between'}}>
          <FlatButton
            label="Back"
            onClick={this.handlePrev}
          />
          <RaisedButton
            label={stepIndex === 2 ? 'Finish' : 'Next'}
            primary={true}
            onClick={this.handleNext}
          />
        </div>
      </div>
    );
  }
}

export default CustomStepConnector;