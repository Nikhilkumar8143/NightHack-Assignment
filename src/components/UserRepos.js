import React,{useState, useContext } from 'react';
import { AuthContext } from "../App";
import { Redirect } from "react-router-dom";

const UserRepos = (props) => {
	const { state } = useContext(AuthContext);
	const [repoData,setRepoData] = useState([]);
	const [filteredData,setFilteredData] = useState([])
	const [ inputValue,setInputValue ] = useState("")
	
	if(state.isLoggedIn && repoData.length <= 0){
		console.log(state.user)
		fetch(state.user.repos_url,{
			method:"GET"
		}).then(data => data.json()).then(data => {
			setRepoData(data)
		})
	}

	const filterRepos = (e) => {
		setInputValue(e.target.value)
		let h = []
		repoData.filter(data => {
			if(data.name.toLowerCase().indexOf(e.target.value) >=0) {
				console.log(data)
				h.push(data)
			}
			setFilteredData(h)
		})
		
	}

    return (
		<div className="login-c">
			<div className="wrapper">
				<div className="flex-style repo-t">
					<h3>Repositories</h3>
					<a className="new-repo">
						<svg className="octicon octicon-repo" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
						New</a>
				</div>
				<input className="input-repo" type="text" value={inputValue} onChange={(e) => filterRepos(e)} placeholder="Find a Repository"/>
				<ul>
					{
						repoData && !inputValue ?  repoData.map(data => {
							return <li className="repo-details" key={data.id}> 
								<a className="flex-style" target="_blank" href={data.html_url}>
								<svg aria-label="Repository" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
								{data.full_name}
								</a></li>
						}) : filteredData && filteredData.map(data => {
							return <li className="repo-details" key={data.id}> 
								<a className="flex-style" target="_blank" href={data.html_url}>
								<svg aria-label="Repository" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
								{data.full_name}
								</a></li>
						})
					}
				</ul>
				{!state.isLoggedIn && <a onClick={() => {return <Redirect to="/"/>}}>Go to Home</a>}
			</div>
        </div>
    );
};

export default UserRepos;
