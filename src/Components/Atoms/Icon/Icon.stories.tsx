import * as React from 'react';
import { Icon } from './Icon';
import { IIconProps } from './typings';

export default {
  title: 'Atoms/Icon ',
  component: Icon,
};

const Template : any = (args: IIconProps) => <Icon {...args} />;

export const SearchIcon = Template.bind({});
SearchIcon.args = {
  width: '40px',
  height: '40px',
  viewBox: '0 0 50 50',
  children: <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />,
};

export const playIcon = Template.bind({});
playIcon.args = {
  width: '40px',
  height: '40px',
  viewBox: '0 0 32 32',
  children: <>
    <defs>
      <path d="M11.8492399,7.58341811 L1.65846699,13.4002217 C1.0939749,13.7224289 0.636363636,13.4906306 0.636363636,12.8818128 L0.636363636,1.11820816 C0.636363636,0.509691691 1.09365937,0.277412016 1.65846699,0.599799247 L11.8492399,6.41660287 C12.413732,6.73881 12.4140475,7.26103088 11.8492399,7.58341811 Z" id="playIcon" />
    </defs>
    <g id="Main-Pages" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="ATVE-homepage-desktop-1600-tlc" transform="translate(-88.000000, -664.000000)">
        <g id="Group-6">
          <g id="hero-homepage-cinema-display">
            <g id="Group-2" transform="translate(80.000000, 388.000000)">
              <g id="Buttons-/-Contained-Buttons-/-onDark-/-Medium-/-w-Icon-Inactive" transform="translate(0.000000, 268.000000)">
                <g id="Icon-Container/sm-(32x32)" transform="translate(8.000000, 8.000000)">
                  <g id="Icon/Player/Play" transform="translate(10.800000, 9.200000)">
                    <mask id="mask-2" fill="white">
                      <use href="#playIcon" />
                    </mask>
                    <use id="play" fill="#FFFFFF" href="#playIcon" />
                    <g id="Color/Neutral-01-(000000)" mask="url(#mask-2)" fill="#000000">
                      <g transform="translate(-6.636364, -5.000000)" id="Rectangle">
                        <rect x="0" y="0" width="24" height="24" />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </>,
};
