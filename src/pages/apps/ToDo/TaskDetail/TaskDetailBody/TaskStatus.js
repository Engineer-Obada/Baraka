import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import IntlMessages from '@crema/utility/IntlMessages';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import PropTypes from 'prop-types';
import {MenuItem} from '@mui/material';
import {putDataApi, useGetDataApi} from '@crema/utility/APIHooks';
import {useInfoViewActionsContext} from '@crema/utility/AppContextProvider/InfoViewContextProvider';

const TaskStatus = ({selectedTask, onUpdateSelectedTask}) => {
  const [{apiData: statusList}] = useGetDataApi('/api/todo/status/list', []);
  const infoViewActionsContext = useInfoViewActionsContext();

  const onChangeStatus = (event) => {
    const task = selectedTask;
    task.status = event.target.value;
    putDataApi('/api/todoApp/task/', infoViewActionsContext, {
      task: selectedTask,
    })
      .then((data) => {
        onUpdateSelectedTask(data[0]);
        infoViewActionsContext.showMessage('Task Updated Successfully');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <FormControl variant='outlined'>
      <InputLabel id='status-select-outlined-label'>
        <IntlMessages id='common.status' />
      </InputLabel>
      <Select
        labelId='status-select-outlined-label'
        label={<IntlMessages id='common.status' />}
        value={selectedTask.status}
        onChange={(event) => onChangeStatus(event)}
        sx={{
          cursor: 'pointer',
          '& .MuiOutlinedInput-input': {
            paddingBottom: 2.5,
            paddingTop: 2.5,
          },
        }}
      >
        {statusList.map((status) => {
          return (
            <MenuItem
              key={status.type}
              value={status.type}
              sx={{
                padding: 2,
                cursor: 'pointer',
              }}
            >
              {status.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default TaskStatus;

TaskStatus.propTypes = {
  selectedTask: PropTypes.object.isRequired,
  onUpdateSelectedTask: PropTypes.func,
};
