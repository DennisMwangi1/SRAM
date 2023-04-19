import React from "react";
import "./SearchStyles.css";

function Search() {
    const pdfUrl = process.env.PUBLIC_URL + '../../../public/KARMA-Code-of-Ethics_EN.pdf';

 
  return (
          <section className="mb-8">
                <h1 className="text-center">OBJECTIVES OF KARMA</h1>
            <div className="flex w-9/12 m-auto">
              <img
                className=""
                src="https://th.bing.com/th/id/R.c4ef3b93155b51d7fe945a5ba59945e9?rik=01chFG%2bC%2bBXDew&riu=http%3a%2f%2fwww.dsm.co.za%2fUploadedImages%2f857c55dccd1cf7002675a073b55599c2.jpg&ehk=z69lF5m8aV3TA%2fFlZiZBB8E18RAtEDN1U78jUqIgQtM%3d&risl=&pid=ImgRaw&r=0"
                alt=""
                width='800px'
              />
              <div>
                <div className="text-center bg-white p-2">
                  <div class="card-body ">
                    <p class="card-text">
                      Organize, represent and act as the professional body for
                      persons working in or interested in records and archives
                      management (hereinafter referred to as RAM) and to govern
                      members in all matters of professional practice.
                    </p>
                    <p class="card-text">
                      Foster and promote education, research, training and
                      invention in records and archives management and/or
                      matters connected to RAM.
                    </p>
                    <p class="card-text">
                      Partner with public and private institutions in fostering
                      adequate and professional RAM practices and systems.
                    </p>
                    <p class="card-text">
                      Maintain a register of professional and certified
                      affiliate members qualified to practice RAM.
                    </p>
                    <p class="card-text">
                      Promote growth of the RAM profession and unite
                      professionals in RAM field through conferences, workshops,
                      seminars, meetings, forums and any other interaction mode
                      that will facilitate linking up of members.
                    </p>

                    <a href={pdfUrl} class="p-2 btn btn-dark" download>
                      download our code of ethics
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
  );
}

export default Search;
