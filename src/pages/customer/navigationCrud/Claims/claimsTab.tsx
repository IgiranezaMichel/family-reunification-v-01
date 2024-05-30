import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import { AllPost } from './post/allPosts';
import { CustomerPost } from './post/customerPosts';
import LostFound from './post/LostFound';
import { Button, Card, FormControl, InputLabel, NativeSelect, Pagination, Paper, TextField } from '@mui/material';
import { FeedbackOutlined, HourglassEmptyRounded, ThumbsUpDown } from '@material-ui/icons';
import { Gender } from '../../../../enum/gender';
import NewPost from './post/newPost';
import { blue, grey } from '@mui/material/colors';

export default function UnstyledTabsIntroduction() {
  return (
    <>
    <div className="bg-info px-4 py-3 mb-3">
      <div className="display-6 fw-bold mb-3 pt-2">
        Recent Post
      </div>
      <div className="row g-5">
        <div className="col">
          <Card className="p-3 rounded-0 border bg-light">
            <div className="fw-bold">Total Posts</div>
            <div className="float-end">
              <ThumbsUpDown className="fs-1" />
            </div>
            <div className="display-5 fw-bold">
              2
            </div>
          </Card>
        </div>
        <div className="col">
          <Card className="p-3 rounded-0 border bg-light">
            <div className="fw-bold">Total Appending</div>
            <div className="float-end">
              <HourglassEmptyRounded className="fs-1" />
            </div>
            <div className="display-5 fw-bold">
              2
            </div>
          </Card>
        </div>
        <div className="col">
          <Card className="p-3 border rounded-0 bg-light">
            <div className="fw-bold">Total Critical claims</div>
            <div className="float-end">
              <FeedbackOutlined className="fs-1" />
            </div>
            <div className="display-5 fw-bold">
              2
            </div>
          </Card>
        </div>
      </div>
    </div>
    <Tabs defaultValue={0}>
        <TabsList>
          <Tab value={0}>All posts</Tab>
          <Tab value={1}>My Posts</Tab>
          <Tab value={2}>My Family Posts</Tab>
          <Tab value={3}>Recent found</Tab>
        </TabsList>
        <Paper>

          <div className="mt-5">
            <TextField variant="standard" className="col-3" label='Search' />
            <span>
              <FormControl className="mb-2 col-2 mx-3">
                <InputLabel variant="standard" htmlFor='uncontrolled' className="text-dark">Order by</InputLabel>
                <NativeSelect defaultValue={Gender.MALE} inputProps={{ name: 'select country', id: 'uncontrolled' }}
                  variant="standard" className="f text-black mb-3">
                  <option value={Gender.MALE}>Rwanda</option>
                  <option value={Gender.FEMALE}>Burundi</option>
                </NativeSelect>
              </FormControl>
            </span>
            <span>
              <Pagination className="float-end" style={{ display: 'inline-flex' }} /><span className="float-end"> 1 page/10</span>
            </span>
          </div>
        </Paper>
        <Paper>
          <Button variant="contained" className="bg-primary" data-bs-toggle="modal"
              data-bs-target="#newPost">claim lost</Button>
          <TabPanel value={0}><AllPost /></TabPanel>
          <TabPanel value={1}><CustomerPost /></TabPanel>
          <TabPanel value={2}><LostFound /></TabPanel>
        </Paper>
      </Tabs>
      <NewPost/>
      </>
  );
}
const Tab = styled(BaseTab)`
  font-family: 'IBM Plex Sans', sans-serif;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)(
  ({ theme }) => `
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border-radius: 12px;
  `,
);

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 400px;
  background-color: ${blue[500]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  `,
);
