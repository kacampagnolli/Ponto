
import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export default  class  ResumoBox extends Component{
    
         
        render(){
          return(
              <div style={{display : 'flex', flexFlow :  'column' , alignItems : 'center', height : '100%', justifyContent : 'center'}}>
                  <div style ={{width : '80%', marginTop: 20}}>
                  <Table style ={{ borderStyle: 'solid'}} height={362}>
                    <TableHeader displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>Dia</TableHeaderColumn>
                        <TableHeaderColumn>Horários</TableHeaderColumn>
                        <TableHeaderColumn>Observações</TableHeaderColumn>
                    </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false} stripedRows={true}>
                    <TableRow >
                        <TableRowColumn>1</TableRowColumn>
                        <TableRowColumn>John Smith</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>2</TableRowColumn>
                        <TableRowColumn>Randal White</TableRowColumn>
                        <TableRowColumn>Unemployed</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>3</TableRowColumn>
                        <TableRowColumn>Stephanie Sanders</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>4</TableRowColumn>
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
                <div style={{border: 'solid', width : '70%'}}>
                    oi
                </div>
              </div>
          );
        }
    }