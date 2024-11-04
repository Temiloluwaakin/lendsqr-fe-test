const GeneralDetails = ({UserDetail}: any) => {
    return ( 
        <div className="sections">
            <section className="personal-info">
                <h3>Personal Information</h3>
                <div className="info-body">
                    <span>
                        <h4> FULL NAME </h4><p> {UserDetail.username} </p>
                    </span>
                    <span>
                        <h4> EMAIL </h4><p> {UserDetail.email} </p>
                    </span>
                    <span>
                        <h4>PHONE NUMBER</h4><p>{UserDetail.phoneNumber}</p>
                    </span>
                    <span>
                        <h4>BVN</h4><p>{UserDetail.bvn}</p>
                    </span>
                    <span>
                        <h4>GENDER</h4><p>{UserDetail.gender}</p>
                    </span>
                    <span>
                        <h4>MARITAL STATUS</h4><p>{UserDetail.maritalStatus}</p>
                    </span>
                    <span>
                        <h4>CHILDREN</h4><p>{UserDetail.children}</p>
                    </span>
                    <span>
                        <h4>TYPE OF RESIDENCE</h4><p>{UserDetail.typeOfResidence}</p>
                    </span>
                </div>
            </section>

            <section className="personal-info">
                <h3>Education and Employment</h3>
                <div className="info-body">
                    <span>
                        <h4> LEVEL OF EDUCATION  </h4><p> {UserDetail.edundemplt.schoollevel} </p>
                    </span>
                    <span>
                        <h4> EMPLOYMENT STATUS  </h4><p> {UserDetail.edundemplt.empstatus} </p>
                    </span>
                    <span>
                        <h4> SECTOR OF EMPLOYMENT  </h4><p> {UserDetail.edundemplt.empsector} </p>
                    </span>
                </div>
            </section>

            <section className="personal-info">
                <h3>Socials</h3>
                <div className="info-body">
                    <span>
                        <h4> TWITTER </h4><p> {UserDetail.social.twitter} </p>
                    </span>
                    <span>
                        <h4> FACEBOOK </h4><p> {UserDetail.social.facebook} </p>
                    </span>
                </div>
            </section>

            <section className="personal-info">
                {UserDetail.guarantors.map((guarantor: any) => (
                    <span>
                        <h3>Guarantors</h3>
                        <div className="info-body">
                            <span>
                                <h4> FULLNAME </h4><p> {guarantor.fullname} </p>
                            </span>
                            <span>
                                <h4> PHONENUMBER </h4><p> {guarantor.phoneNumber} </p>
                            </span>
                            <span>
                                <h4> EMAIL </h4><p> {guarantor.email} </p>
                            </span>
                            <span>
                                <h4> RELATIONSHIP </h4><p> {guarantor.relationship} </p>
                            </span>
                        </div>
                    </span>
                ))}
            </section>
        </div>
    );
}
 
export default GeneralDetails;