import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import PrintIcon  from 'material-ui/svg-icons/action/print'
import PDFIcon  from 'material-ui/svg-icons/image/picture-as-pdf'
import MoreIcon  from 'material-ui/svg-icons/navigation/more-vert'
import ContentCopyIcon from 'material-ui/svg-icons/content/content-copy'
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import GridOnIcon from 'material-ui/svg-icons/image/grid-on'
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';


const styles ={
  BlockWithText : {
    overflow: 'hidden',
    position: 'relative', 
    lineHeight: '1.2em',
    maxHeight: '3.6em',
    textAlign: 'justify',
    marginRight: '-1em',
    paddingRight: '1em',
    margin : 0,
    backgroundColor: 'inherit'

}
}
export default  class  ResumoBox extends Component{
    constructor(){
        super()
        this.state = {dialogOpenClose: false, dialogButtonText : 'Exportar'};
    }

      handleDialogOpen = () => {
        this.setState({dialogOpenClose: true, dialogButtonText : 'Exportar'});

      };
    
      handleDialogClose = () => {
        this.setState({dialogOpenClose: false});
      };

      handleExportFormatButtonText = (e, value) => {
          if(value == "print"){
            this.setState({dialogButtonText: 'Imprimir'});
          }else{
            this.setState({dialogButtonText: 'Exportar'});
          }
      };

        render(){
        
          return(
              <div style={{display : 'flex', flexFlow :  'column' , alignItems : 'center', height : '100%', justifyContent : 'space-around'}}>
                  <div style ={{width : '90%',  display: 'flex'}}>
                  {/*<div style = {{width: '10%', display: 'flex', justifyContent: 'flex-start', flexFlow: 'column', alignItems: 'center'}}>
                  <PrintIcon style={{width: 35, height: 35, marginBottom: 10}}/>
                  <PDFIcon style={{width: 35, height: 35, marginBottom: 10}}/>
                  </div>
          <div style= {{width: '90%'}}>*/}
                  <Table style ={{ borderStyle: 'solid', borderWidth : 1, borderColor: 'rgb(217, 220, 240)' }} height={362} >
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false} > 
                    <TableRow >
                        <TableHeaderColumn style={{textAlign:  'center', width: '12.23%', margin : 0, fontSize : 22 }}>Dia</TableHeaderColumn>
                        <TableHeaderColumn style={{textAlign:  'center',  width: '39.13%', padding: 0 }}>
                            <div style ={{display: 'flex', flexFlow: 'column',justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{fontSize : 22}}>Horários</div>
                                <div style={{alignSelf : 'flex-end', display: 'flex', alignItems : 'center', justifyContent: 'space-around', fontSize : 11,  width: '100%'}}>
                                    <div style ={{ alignSelf : 'flex-end' , width:46}}>Entrada</div>
                                    <div style ={{alignSelf : 'flex-end' ,width:46}}>Almoço</div>
                                    <div style ={{alignSelf : 'flex-end' ,width:46}}>Volta <br/>Almoço</div>
                                    <div style ={{alignSelf : 'flex-end' ,width:46}}>Saída</div>
                                    <div style ={{alignSelf : 'flex-end' ,width:46}}>Hr. Extra</div>
                                    <div style ={{alignSelf : 'flex-end' ,width:46}}>Banco Hr.</div>
                                </div>
                            </div>
                        </TableHeaderColumn>
                        <TableHeaderColumn style={{textAlign:  'center', fontSize : 22, display :'flex', justifyContent: 'center', alignItems : 'center', paddingLeft : 44, paddingRight : 12}}><div>Observações</div> <IconButton style={{marginLeft: 'auto'}} onClick={this.handleDialogOpen} > < ContentCopyIcon/></IconButton></TableHeaderColumn>
                    </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false} stripedRows={true} preScanRows={false}>
                    <TableRow >
                        <TableRowColumn style={{textAlign:  'center', width: '11%', padding: 0}}>26/02/2017</TableRowColumn>
                        <TableRowColumn style={{padding: 0, maxHeight : '5%', width: '35%', minWidth : 173}} ><div style={{display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                        <div style ={{backgroundColor: '#2e7a70', padding: '2%'}}>08:30</div>
                        <div style ={{backgroundColor: '#2e7a70', padding: '2%'}}>12:00</div>
                        <div style ={{backgroundColor: '#2e7a70', padding: '2%'}}>13:30</div>
                        <div style ={{backgroundColor: '#2e7a70', padding: '2%'}}>18:00</div>
                        <div style ={{backgroundColor: '#2e7a70', padding: '2%'}}>19:30</div>
                        <div style ={{backgroundColor: '#2e7a70', padding: '2%', width: 32.766}}></div>
                        </div></TableRowColumn>
                    <TableRowColumn style={{whiteSpace:'normal', backgroundColor: 'rgb(217, 220, 240)', padding: '0.2%', width: '42%'}}><p className="block-with-text"style={styles.BlockWithText}>The Hitch Hiker's Guide to the Galaxy has a few things to say on the subject of towels. A towel, The Hitch Hiker's Guide to the Galaxy has a few things to say on the subject of towels. A towel </p>
                        <style>{".block-with-text:before { content: '...'; position: absolute; right: 0; bottom: 0;}  .block-with-text:after {  content: '';  position: absolute; right: 0;   width: 1em;   height: 1em;   margin-top: 0.2em;  background: inherit; }"}</style>
                    </TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn style={{textAlign:  'center',  width: '54%'}}>28/02/2017</TableRowColumn>
                        <TableRowColumn>Randal White</TableRowColumn>
                        <TableRowColumn>Unemployed</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn style={{textAlign:  'center'}}>01/03/2017</TableRowColumn>
                        <TableRowColumn>Stephanie Sanders</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn style={{textAlign:  'center'}}>01/03/2017</TableRowColumn>
                        <TableRowColumn>Steve Brown</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>5</TableRowColumn>
                        <TableRowColumn>Christopher Nolan</TableRowColumn>
                        <TableRowColumn>Unemployed</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>5</TableRowColumn>
                        <TableRowColumn>Christopher Nolan</TableRowColumn>
                        <TableRowColumn>Unemployed</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>5</TableRowColumn>
                        <TableRowColumn>Christopher Nolan</TableRowColumn>
                        <TableRowColumn>Unemployed</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>5</TableRowColumn>
                        <TableRowColumn>Christopher Nolan</TableRowColumn>
                        <TableRowColumn>Unemployed</TableRowColumn>
                    </TableRow>
                    </TableBody>
                </Table>
                
                </div>
                <div style={{backgroundColor: 'rgb(217, 220, 240)',  borderWidth: 1, width : '70%', height : '22%', marginTop: '1%', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                    <div style={{display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'space-around', height : '100%'}}><div style={{textAlign :'center'}}>Horas Extras<br/>7:00</div><div style={{textAlign :'center'}}>Banco de Horas<br/>3:22</div></div>
                    <div style={{width: '70%',height: '100%', display: 'flex', alignItems: 'center', justifyContent : 'space-around'}}>
                        <div style = {{ height: '100%', display: 'flex', alignItems: 'center', flexFlow: 'column', justifyContent : 'space-around'}}>
                            <div style={{height: 18}}></div>
                            <div>Faltas</div>
                            <div>Atrasos</div>
                        </div>
                        <div style = {{ height: '100%', display: 'flex', alignItems: 'center', flexFlow: 'column', justifyContent : 'space-around'}}>
                            <div>Totais</div>
                            <div>3</div>
                            <div>1</div>
                        </div>
                        <div style = {{ height: '100%', display: 'flex', alignItems: 'center', flexFlow: 'column', justifyContent : 'space-around'}}>
                            <div>Não Justificadas</div>
                            <div>2</div>
                            <div>1</div>
                        </div>
                        <div style = {{ height: '100%', display: 'flex', alignItems: 'center', flexFlow: 'column', justifyContent : 'space-around'}}>
                            <div>Justificadas</div>
                            <div>1</div>
                            <div>0</div>
                        </div>
                    </div>

                </div>
                <Dialog
                    actions={[<FlatButton
                                label="Cancelar"
                                primary={true}
                                onClick={this.handleDialogClose}/>,
                            <FlatButton
                                label={this.state.dialogButtonText}
                                primary={true}
                                onClick={this.handleDialogClose}/>]}
                    modal={false}
                    contentStyle={{width: '35%', height : '50%', }}
                    open={this.state.dialogOpenClose}
                    onRequestClose={this.handleDialogClose}
                    bodyStyle={{padding : '5%'}}
                    >
                    {/* actionsContainerStyle={{backgroundColor : 'rgb(217, 220, 240)'}}
                    bodyStyle={{backgroundColor : 'rgb(217, 120, 240)'}} 
                    style={{}}*/}
                    <div style={{height: 250 , display: 'flex', flexFlow: 'column', justifyContent: 'space-around'}}>
                    <RadioButtonGroup 
                        name="exportFormat" 
                        defaultSelected="pdf" 
                        onChange={this.handleExportFormatButtonText } 
                        style={{flexBasis: '40%', display: 'flex', alignItems : 'center', justifyContent: 'center'}}>
                    <RadioButton
                            value="pdf"
                            label="PDF"
                            checkedIcon={<PDFIcon style={{width : 40, height: 40}} />}
                            uncheckedIcon={<PDFIcon style={{width : 40, height: 40}}/>}
                            labelStyle={{lineHeight : '40px', marginLeft : 15, marginRight : 25}}
                            style={{width: 'auto'}}
                    />
                    <RadioButton
                            value="xls"
                            label="XLS"
                            checkedIcon={<GridOnIcon  style={{width : 40, height: 40}} />}
                            uncheckedIcon={<GridOnIcon  style={{width : 40, height: 40}}/>}
                            labelStyle={{lineHeight : '40px', marginLeft : 15, marginRight : 25}}
                            style={{width: 'auto'}}
                    />
                    <RadioButton
                            value="print"
                            label="Imprimir"
                            checkedIcon={<PrintIcon style={{width : 40, height: 40}} />}
                            uncheckedIcon={<PrintIcon style={{width : 40, height: 40}} />}
                            labelStyle={{lineHeight : '40px', marginLeft : 15, marginRight : 10}}
                            style={{width: 'auto'}}
                    />
                    </RadioButtonGroup>
                    <div style={{ flexBasis : '1%'}}>
                        <Divider />
                    </div>
                    <div style={{display: 'flex', flexFlow: 'column', justifyContent : 'space-around', flexBasis : '39%' }}>
                    <Checkbox
                        label="Incluir feriados e finais de semana."
                    />  
                    <Checkbox
                        label="Incluir totalizadores."
                        defaultChecked={true}
                    />
                    </div>
                    </div>
                </Dialog>
              </div>
          );
        }
    }