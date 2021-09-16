import React from 'react';

export default function NoteLines({
  height = '376',
  width = '405',
  position = 'absolute',
}) {
  return (
    <div>
      <svg
        width={width}
        height={height}
        style={{ position: position }}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <mask id="path-1-inside-1" fill="white">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24.25 17.8857C24.1119 17.8857 24 17.9977 24 18.1357C24 18.2738 24.1119 18.3857 24.25 18.3857H402.75C402.888 18.3857 403 18.2738 403 18.1357C403 17.9977 402.888 17.8857 402.75 17.8857H24.25ZM397.071 0.0890095C397.209 0.252252 397.092 0.5 396.878 0.5H30.1223C29.9082 0.5 29.7908 0.252255 29.9293 0.0890113C29.9774 0.0323955 30.048 0 30.1222 0H396.878C396.952 0 397.023 0.0323942 397.071 0.0890095ZM403 36.0215C403 35.8834 402.888 35.7715 402.75 35.7715H24.25C24.1119 35.7715 24 35.8834 24 36.0215C24 36.1596 24.1119 36.2715 24.25 36.2715H402.75C402.888 36.2715 403 36.1596 403 36.0215ZM403 53.9072C403 53.7692 402.888 53.6572 402.75 53.6572H24.25C24.1119 53.6572 24 53.7692 24 53.9072C24 54.0453 24.1119 54.1572 24.25 54.1572H402.75C402.888 54.1572 403 54.0453 403 53.9072ZM403 71.793C403 71.6549 402.888 71.543 402.75 71.543H24.25C24.1119 71.543 24 71.6549 24 71.793C24 71.931 24.1119 72.043 24.25 72.043H402.75C402.888 72.043 403 71.931 403 71.793ZM403 89.6787C403 89.5406 402.888 89.4287 402.75 89.4287H24.25C24.1119 89.4287 24 89.5406 24 89.6787C24 89.8168 24.1119 89.9287 24.25 89.9287H402.75C402.888 89.9287 403 89.8168 403 89.6787ZM403 107.564C403 107.426 402.888 107.314 402.75 107.314H24.25C24.1119 107.314 24 107.426 24 107.564C24 107.703 24.1119 107.814 24.25 107.814H402.75C402.888 107.814 403 107.703 403 107.564ZM403 125.45C403 125.312 402.888 125.2 402.75 125.2H24.25C24.1119 125.2 24 125.312 24 125.45C24 125.588 24.1119 125.7 24.25 125.7H402.75C402.888 125.7 403 125.588 403 125.45ZM403 143.336C403 143.198 402.888 143.086 402.75 143.086H24.25C24.1119 143.086 24 143.198 24 143.336C24 143.474 24.1119 143.586 24.25 143.586H402.75C402.888 143.586 403 143.474 403 143.336ZM403 161.222C403 161.084 402.888 160.972 402.75 160.972H24.25C24.1119 160.972 24 161.084 24 161.222C24 161.36 24.1119 161.472 24.25 161.472H402.75C402.888 161.472 403 161.36 403 161.222ZM403 179.107C403 178.969 402.888 178.857 402.75 178.857H24.25C24.1119 178.857 24 178.969 24 179.107C24 179.245 24.1119 179.357 24.25 179.357H402.75C402.888 179.357 403 179.245 403 179.107ZM403 196.993C403 196.855 402.888 196.743 402.75 196.743H24.25C24.1119 196.743 24 196.855 24 196.993C24 197.131 24.1119 197.243 24.25 197.243H402.75C402.888 197.243 403 197.131 403 196.993ZM403 214.879C403 214.741 402.888 214.629 402.75 214.629H24.25C24.1119 214.629 24 214.741 24 214.879C24 215.017 24.1119 215.129 24.25 215.129H402.75C402.888 215.129 403 215.017 403 214.879ZM403 232.765C403 232.627 402.888 232.515 402.75 232.515H24.25C24.1119 232.515 24 232.627 24 232.765C24 232.903 24.1119 233.015 24.25 233.015H402.75C402.888 233.015 403 232.903 403 232.765ZM403 250.65C403 250.512 402.888 250.4 402.75 250.4H24.25C24.1119 250.4 24 250.512 24 250.65C24 250.788 24.1119 250.9 24.25 250.9H402.75C402.888 250.9 403 250.788 403 250.65ZM403 268.536C403 268.398 402.888 268.286 402.75 268.286H24.25C24.1119 268.286 24 268.398 24 268.536C24 268.674 24.1119 268.786 24.25 268.786H402.75C402.888 268.786 403 268.674 403 268.536ZM403 286.422C403 286.284 402.888 286.172 402.75 286.172H24.25C24.1119 286.172 24 286.284 24 286.422C24 286.56 24.1119 286.672 24.25 286.672H402.75C402.888 286.672 403 286.56 403 286.422ZM403 304.308C403 304.17 402.888 304.058 402.75 304.058H24.25C24.1119 304.058 24 304.17 24 304.308C24 304.446 24.1119 304.558 24.25 304.558H402.75C402.888 304.558 403 304.446 403 304.308ZM403 322.193C403 322.055 402.888 321.943 402.75 321.943H24.25C24.1119 321.943 24 322.055 24 322.193C24 322.331 24.1119 322.443 24.25 322.443H402.75C402.888 322.443 403 322.331 403 322.193ZM399.968 340.198C400.059 340.031 399.937 339.829 399.747 339.829H27.2532C27.0629 339.829 26.9409 340.031 27.032 340.198C27.0761 340.279 27.161 340.329 27.2532 340.329H399.747C399.839 340.329 399.924 340.279 399.968 340.198Z"
            />
          </mask>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.25 17.8857C24.1119 17.8857 24 17.9977 24 18.1357C24 18.2738 24.1119 18.3857 24.25 18.3857H402.75C402.888 18.3857 403 18.2738 403 18.1357C403 17.9977 402.888 17.8857 402.75 17.8857H24.25ZM397.071 0.0890095C397.209 0.252252 397.092 0.5 396.878 0.5H30.1223C29.9082 0.5 29.7908 0.252255 29.9293 0.0890113C29.9774 0.0323955 30.048 0 30.1222 0H396.878C396.952 0 397.023 0.0323942 397.071 0.0890095ZM403 36.0215C403 35.8834 402.888 35.7715 402.75 35.7715H24.25C24.1119 35.7715 24 35.8834 24 36.0215C24 36.1596 24.1119 36.2715 24.25 36.2715H402.75C402.888 36.2715 403 36.1596 403 36.0215ZM403 53.9072C403 53.7692 402.888 53.6572 402.75 53.6572H24.25C24.1119 53.6572 24 53.7692 24 53.9072C24 54.0453 24.1119 54.1572 24.25 54.1572H402.75C402.888 54.1572 403 54.0453 403 53.9072ZM403 71.793C403 71.6549 402.888 71.543 402.75 71.543H24.25C24.1119 71.543 24 71.6549 24 71.793C24 71.931 24.1119 72.043 24.25 72.043H402.75C402.888 72.043 403 71.931 403 71.793ZM403 89.6787C403 89.5406 402.888 89.4287 402.75 89.4287H24.25C24.1119 89.4287 24 89.5406 24 89.6787C24 89.8168 24.1119 89.9287 24.25 89.9287H402.75C402.888 89.9287 403 89.8168 403 89.6787ZM403 107.564C403 107.426 402.888 107.314 402.75 107.314H24.25C24.1119 107.314 24 107.426 24 107.564C24 107.703 24.1119 107.814 24.25 107.814H402.75C402.888 107.814 403 107.703 403 107.564ZM403 125.45C403 125.312 402.888 125.2 402.75 125.2H24.25C24.1119 125.2 24 125.312 24 125.45C24 125.588 24.1119 125.7 24.25 125.7H402.75C402.888 125.7 403 125.588 403 125.45ZM403 143.336C403 143.198 402.888 143.086 402.75 143.086H24.25C24.1119 143.086 24 143.198 24 143.336C24 143.474 24.1119 143.586 24.25 143.586H402.75C402.888 143.586 403 143.474 403 143.336ZM403 161.222C403 161.084 402.888 160.972 402.75 160.972H24.25C24.1119 160.972 24 161.084 24 161.222C24 161.36 24.1119 161.472 24.25 161.472H402.75C402.888 161.472 403 161.36 403 161.222ZM403 179.107C403 178.969 402.888 178.857 402.75 178.857H24.25C24.1119 178.857 24 178.969 24 179.107C24 179.245 24.1119 179.357 24.25 179.357H402.75C402.888 179.357 403 179.245 403 179.107ZM403 196.993C403 196.855 402.888 196.743 402.75 196.743H24.25C24.1119 196.743 24 196.855 24 196.993C24 197.131 24.1119 197.243 24.25 197.243H402.75C402.888 197.243 403 197.131 403 196.993ZM403 214.879C403 214.741 402.888 214.629 402.75 214.629H24.25C24.1119 214.629 24 214.741 24 214.879C24 215.017 24.1119 215.129 24.25 215.129H402.75C402.888 215.129 403 215.017 403 214.879ZM403 232.765C403 232.627 402.888 232.515 402.75 232.515H24.25C24.1119 232.515 24 232.627 24 232.765C24 232.903 24.1119 233.015 24.25 233.015H402.75C402.888 233.015 403 232.903 403 232.765ZM403 250.65C403 250.512 402.888 250.4 402.75 250.4H24.25C24.1119 250.4 24 250.512 24 250.65C24 250.788 24.1119 250.9 24.25 250.9H402.75C402.888 250.9 403 250.788 403 250.65ZM403 268.536C403 268.398 402.888 268.286 402.75 268.286H24.25C24.1119 268.286 24 268.398 24 268.536C24 268.674 24.1119 268.786 24.25 268.786H402.75C402.888 268.786 403 268.674 403 268.536ZM403 286.422C403 286.284 402.888 286.172 402.75 286.172H24.25C24.1119 286.172 24 286.284 24 286.422C24 286.56 24.1119 286.672 24.25 286.672H402.75C402.888 286.672 403 286.56 403 286.422ZM403 304.308C403 304.17 402.888 304.058 402.75 304.058H24.25C24.1119 304.058 24 304.17 24 304.308C24 304.446 24.1119 304.558 24.25 304.558H402.75C402.888 304.558 403 304.446 403 304.308ZM403 322.193C403 322.055 402.888 321.943 402.75 321.943H24.25C24.1119 321.943 24 322.055 24 322.193C24 322.331 24.1119 322.443 24.25 322.443H402.75C402.888 322.443 403 322.331 403 322.193ZM399.968 340.198C400.059 340.031 399.937 339.829 399.747 339.829H27.2532C27.0629 339.829 26.9409 340.031 27.032 340.198C27.0761 340.279 27.161 340.329 27.2532 340.329H399.747C399.839 340.329 399.924 340.279 399.968 340.198Z"
            fill="white"
          />
          <path
            d="M402.75 17.3857H24.25V19.3857H402.75V17.3857ZM24.25 18.8857H402.75V16.8857H24.25V18.8857ZM396.878 -0.5H30.1223V1.5H396.878V-0.5ZM396.878 -1H30.1222V1H396.878V-1ZM24.25 36.7715H402.75V34.7715H24.25V36.7715ZM402.75 35.2715H24.25V37.2715H402.75V35.2715ZM24.25 54.6572H402.75V52.6572H24.25V54.6572ZM402.75 53.1572H24.25V55.1572H402.75V53.1572ZM24.25 72.543H402.75V70.543H24.25V72.543ZM402.75 71.043H24.25V73.043H402.75V71.043ZM24.25 90.4287H402.75V88.4287H24.25V90.4287ZM402.75 88.9287H24.25V90.9287H402.75V88.9287ZM24.25 108.314H402.75V106.314H24.25V108.314ZM402.75 106.814H24.25V108.814H402.75V106.814ZM24.25 126.2H402.75V124.2H24.25V126.2ZM402.75 124.7H24.25V126.7H402.75V124.7ZM24.25 144.086H402.75V142.086H24.25V144.086ZM402.75 142.586H24.25V144.586H402.75V142.586ZM24.25 161.972H402.75V159.972H24.25V161.972ZM402.75 160.472H24.25V162.472H402.75V160.472ZM24.25 179.857H402.75V177.857H24.25V179.857ZM402.75 178.357H24.25V180.357H402.75V178.357ZM24.25 197.743H402.75V195.743H24.25V197.743ZM402.75 196.243H24.25V198.243H402.75V196.243ZM24.25 215.629H402.75V213.629H24.25V215.629ZM402.75 214.129H24.25V216.129H402.75V214.129ZM24.25 233.515H402.75V231.515H24.25V233.515ZM402.75 232.015H24.25V234.015H402.75V232.015ZM24.25 251.4H402.75V249.4H24.25V251.4ZM402.75 249.9H24.25V251.9H402.75V249.9ZM24.25 269.286H402.75V267.286H24.25V269.286ZM402.75 267.786H24.25V269.786H402.75V267.786ZM24.25 287.172H402.75V285.172H24.25V287.172ZM402.75 285.672H24.25V287.672H402.75V285.672ZM24.25 305.058H402.75V303.058H24.25V305.058ZM402.75 303.558H24.25V305.558H402.75V303.558ZM24.25 322.943H402.75V320.943H24.25V322.943ZM402.75 321.443H24.25V323.443H402.75V321.443ZM27.2532 340.829H399.747V338.829H27.2532V340.829ZM399.747 339.329H27.2532V341.329H399.747V339.329ZM399.747 341.329C400.201 341.329 400.625 341.082 400.846 340.677L399.09 339.72C399.223 339.476 399.477 339.329 399.747 339.329V341.329ZM26.1538 340.677C26.3748 341.082 26.7985 341.329 27.2532 341.329V339.329C27.5235 339.329 27.7773 339.476 27.9101 339.72L26.1538 340.677ZM399.747 340.829C399.192 340.829 398.811 340.231 399.09 339.72L400.846 340.677C401.307 339.831 400.682 338.829 399.747 338.829V340.829ZM27.2532 338.829C26.3178 338.829 25.6932 339.831 26.1538 340.677L27.9101 339.72C28.1886 340.231 27.8081 340.829 27.2532 340.829V338.829ZM402.75 323.443C403.44 323.443 404 322.884 404 322.193H402C402 321.779 402.336 321.443 402.75 321.443V323.443ZM23 322.193C23 322.884 23.5597 323.443 24.25 323.443V321.443C24.6642 321.443 25 321.779 25 322.193H23ZM402.75 322.943C402.336 322.943 402 322.608 402 322.193H404C404 321.503 403.44 320.943 402.75 320.943V322.943ZM24.25 320.943C23.5596 320.943 23 321.503 23 322.193H25C25 322.608 24.6642 322.943 24.25 322.943V320.943ZM402.75 305.558C403.44 305.558 404 304.998 404 304.308H402C402 303.893 402.336 303.558 402.75 303.558V305.558ZM23 304.308C23 304.998 23.5597 305.558 24.25 305.558V303.558C24.6642 303.558 25 303.893 25 304.308H23ZM402.75 305.058C402.336 305.058 402 304.722 402 304.308H404C404 303.617 403.44 303.058 402.75 303.058V305.058ZM24.25 303.058C23.5596 303.058 23 303.617 23 304.308H25C25 304.722 24.6642 305.058 24.25 305.058V303.058ZM402.75 287.672C403.44 287.672 404 287.112 404 286.422H402C402 286.008 402.336 285.672 402.75 285.672V287.672ZM23 286.422C23 287.112 23.5597 287.672 24.25 287.672V285.672C24.6642 285.672 25 286.008 25 286.422H23ZM402.75 287.172C402.336 287.172 402 286.836 402 286.422H404C404 285.732 403.44 285.172 402.75 285.172V287.172ZM24.25 285.172C23.5596 285.172 23 285.732 23 286.422H25C25 286.836 24.6642 287.172 24.25 287.172V285.172ZM402.75 269.786C403.44 269.786 404 269.227 404 268.536H402C402 268.122 402.336 267.786 402.75 267.786V269.786ZM23 268.536C23 269.227 23.5597 269.786 24.25 269.786V267.786C24.6642 267.786 25 268.122 25 268.536H23ZM402.75 269.286C402.336 269.286 402 268.95 402 268.536H404C404 267.846 403.44 267.286 402.75 267.286V269.286ZM24.25 267.286C23.5596 267.286 23 267.846 23 268.536H25C25 268.95 24.6642 269.286 24.25 269.286V267.286ZM402.75 251.9C403.44 251.9 404 251.341 404 250.65H402C402 250.236 402.336 249.9 402.75 249.9V251.9ZM23 250.65C23 251.341 23.5597 251.9 24.25 251.9V249.9C24.6642 249.9 25 250.236 25 250.65H23ZM402.75 251.4C402.336 251.4 402 251.065 402 250.65H404C404 249.96 403.44 249.4 402.75 249.4V251.4ZM24.25 249.4C23.5596 249.4 23 249.96 23 250.65H25C25 251.065 24.6642 251.4 24.25 251.4V249.4ZM402.75 234.015C403.44 234.015 404 233.455 404 232.765H402C402 232.35 402.336 232.015 402.75 232.015V234.015ZM23 232.765C23 233.455 23.5597 234.015 24.25 234.015V232.015C24.6642 232.015 25 232.35 25 232.765H23ZM402.75 233.515C402.336 233.515 402 233.179 402 232.765H404C404 232.074 403.44 231.515 402.75 231.515V233.515ZM24.25 231.515C23.5596 231.515 23 232.074 23 232.765H25C25 233.179 24.6642 233.515 24.25 233.515V231.515ZM402.75 216.129C403.44 216.129 404 215.569 404 214.879H402C402 214.465 402.336 214.129 402.75 214.129V216.129ZM23 214.879C23 215.569 23.5597 216.129 24.25 216.129V214.129C24.6642 214.129 25 214.465 25 214.879H23ZM402.75 215.629C402.336 215.629 402 215.293 402 214.879H404C404 214.189 403.44 213.629 402.75 213.629V215.629ZM24.25 213.629C23.5596 213.629 23 214.189 23 214.879H25C25 215.293 24.6642 215.629 24.25 215.629V213.629ZM402.75 198.243C403.44 198.243 404 197.684 404 196.993H402C402 196.579 402.336 196.243 402.75 196.243V198.243ZM23 196.993C23 197.684 23.5597 198.243 24.25 198.243V196.243C24.6642 196.243 25 196.579 25 196.993H23ZM402.75 197.743C402.336 197.743 402 197.407 402 196.993H404C404 196.303 403.44 195.743 402.75 195.743V197.743ZM24.25 195.743C23.5596 195.743 23 196.303 23 196.993H25C25 197.407 24.6642 197.743 24.25 197.743V195.743ZM402.75 180.357C403.44 180.357 404 179.798 404 179.107H402C402 178.693 402.336 178.357 402.75 178.357V180.357ZM23 179.107C23 179.798 23.5597 180.357 24.25 180.357V178.357C24.6642 178.357 25 178.693 25 179.107H23ZM402.75 179.857C402.336 179.857 402 179.522 402 179.107H404C404 178.417 403.44 177.857 402.75 177.857V179.857ZM24.25 177.857C23.5596 177.857 23 178.417 23 179.107H25C25 179.522 24.6642 179.857 24.25 179.857V177.857ZM402.75 162.472C403.44 162.472 404 161.912 404 161.222H402C402 160.807 402.336 160.472 402.75 160.472V162.472ZM23 161.222C23 161.912 23.5597 162.472 24.25 162.472V160.472C24.6642 160.472 25 160.807 25 161.222H23ZM402.75 161.972C402.336 161.972 402 161.636 402 161.222H404C404 160.531 403.44 159.972 402.75 159.972V161.972ZM24.25 159.972C23.5596 159.972 23 160.531 23 161.222H25C25 161.636 24.6642 161.972 24.25 161.972V159.972ZM402.75 144.586C403.44 144.586 404 144.026 404 143.336H402C402 142.922 402.336 142.586 402.75 142.586V144.586ZM23 143.336C23 144.026 23.5597 144.586 24.25 144.586V142.586C24.6642 142.586 25 142.922 25 143.336H23ZM402.75 144.086C402.336 144.086 402 143.75 402 143.336H404C404 142.646 403.44 142.086 402.75 142.086V144.086ZM24.25 142.086C23.5596 142.086 23 142.646 23 143.336H25C25 143.75 24.6642 144.086 24.25 144.086V142.086ZM402.75 126.7C403.44 126.7 404 126.141 404 125.45H402C402 125.036 402.336 124.7 402.75 124.7V126.7ZM23 125.45C23 126.141 23.5597 126.7 24.25 126.7V124.7C24.6642 124.7 25 125.036 25 125.45H23ZM402.75 126.2C402.336 126.2 402 125.864 402 125.45H404C404 124.76 403.44 124.2 402.75 124.2V126.2ZM24.25 124.2C23.5596 124.2 23 124.76 23 125.45H25C25 125.864 24.6642 126.2 24.25 126.2V124.2ZM402.75 108.814C403.44 108.814 404 108.255 404 107.564H402C402 107.15 402.336 106.814 402.75 106.814V108.814ZM23 107.564C23 108.255 23.5597 108.814 24.25 108.814V106.814C24.6642 106.814 25 107.15 25 107.564H23ZM402.75 108.314C402.336 108.314 402 107.979 402 107.564H404C404 106.874 403.44 106.314 402.75 106.314V108.314ZM24.25 106.314C23.5596 106.314 23 106.874 23 107.564H25C25 107.979 24.6642 108.314 24.25 108.314V106.314ZM402.75 90.9287C403.44 90.9287 404 90.3691 404 89.6787H402C402 89.2645 402.336 88.9287 402.75 88.9287V90.9287ZM23 89.6787C23 90.3691 23.5597 90.9287 24.25 90.9287V88.9287C24.6642 88.9287 25 89.2645 25 89.6787H23ZM402.75 90.4287C402.336 90.4287 402 90.0929 402 89.6787H404C404 88.9883 403.44 88.4287 402.75 88.4287V90.4287ZM24.25 88.4287C23.5596 88.4287 23 88.9884 23 89.6787H25C25 90.0929 24.6642 90.4287 24.25 90.4287V88.4287ZM402.75 73.043C403.44 73.043 404 72.4833 404 71.793H402C402 71.3788 402.336 71.043 402.75 71.043V73.043ZM23 71.793C23 72.4834 23.5597 73.043 24.25 73.043V71.043C24.6642 71.043 25 71.3787 25 71.793H23ZM402.75 72.543C402.336 72.543 402 72.2072 402 71.793H404C404 71.1026 403.44 70.543 402.75 70.543V72.543ZM24.25 70.543C23.5596 70.543 23 71.1026 23 71.793H25C25 72.2072 24.6642 72.543 24.25 72.543V70.543ZM402.75 55.1572C403.44 55.1572 404 54.5976 404 53.9072H402C402 53.493 402.336 53.1572 402.75 53.1572V55.1572ZM23 53.9072C23 54.5976 23.5597 55.1572 24.25 55.1572V53.1572C24.6642 53.1572 25 53.493 25 53.9072H23ZM402.75 54.6572C402.336 54.6572 402 54.3215 402 53.9072H404C404 53.2168 403.44 52.6572 402.75 52.6572V54.6572ZM24.25 52.6572C23.5596 52.6572 23 53.2169 23 53.9072H25C25 54.3214 24.6642 54.6572 24.25 54.6572V52.6572ZM402.75 37.2715C403.44 37.2715 404 36.7118 404 36.0215H402C402 35.6073 402.336 35.2715 402.75 35.2715V37.2715ZM23 36.0215C23 36.7119 23.5597 37.2715 24.25 37.2715V35.2715C24.6642 35.2715 25 35.6072 25 36.0215H23ZM402.75 36.7715C402.336 36.7715 402 36.4357 402 36.0215H404C404 35.3311 403.44 34.7715 402.75 34.7715V36.7715ZM24.25 34.7715C23.5596 34.7715 23 35.3311 23 36.0215H25C25 36.4357 24.6642 36.7715 24.25 36.7715V34.7715ZM396.878 1C396.661 1 396.452 0.905281 396.308 0.735994L397.833 -0.557975C397.593 -0.840492 397.243 -1 396.878 -1V1ZM30.6918 0.736006C30.5482 0.905266 30.3391 1 30.1222 1V-1C29.7569 -1 29.4065 -0.840475 29.1668 -0.557984L30.6918 0.736006ZM30.1223 -0.5C30.7392 -0.5 31.1181 0.233692 30.6918 0.736006L29.1668 -0.557984C28.4636 0.270819 29.0771 1.5 30.1223 1.5V-0.5ZM396.878 1.5C397.923 1.5 398.536 0.270829 397.833 -0.557975L396.308 0.735994C395.882 0.233675 396.261 -0.5 396.878 -0.5V1.5ZM404 18.1357C404 17.4454 403.44 16.8857 402.75 16.8857V18.8857C402.336 18.8857 402 18.55 402 18.1357H404ZM402.75 19.3857C403.44 19.3857 404 18.8261 404 18.1357H402C402 17.7215 402.336 17.3857 402.75 17.3857V19.3857ZM25 18.1357C25 18.55 24.6642 18.8857 24.25 18.8857V16.8857C23.5596 16.8857 23 17.4454 23 18.1357H25ZM23 18.1357C23 18.8261 23.5597 19.3857 24.25 19.3857V17.3857C24.6642 17.3857 25 17.7215 25 18.1357H23Z"
            fill="#0085FF"
            mask="url(#path-1-inside-1)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="405"
            height="375.329"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="3"
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow"
            />
            <feOffset dx="-11" dy="22" />
            <feGaussianBlur stdDeviation="8" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
