import { namespace } from "../helper-functions/constants";

export default function selectJobBlock() {
    const { registerBlockType, createBlock } = wp.blocks;
    const { SelectControl } = wp.components;
    const { Component } = wp.element;
    const { i18n } = wp;

    const blockSlug = "select-job";
	const blockTitle = "Select Job";
	const blockDescription = "Component to select a single job";
	const blockCategory = "common";
    const blockIcon = "admin-users"; // Dashicons: https://developer.wordpress.org/resource/dashicons/

    const attributes = {
        job_id: {
            type: 'String',
            default: '',
        },
    }

    registerBlockType(`${namespace}/${blockSlug}`, {
		title: i18n.__(blockTitle),
		description: i18n.__(blockDescription),
		category: blockCategory,
        icon: blockIcon,
		attributes,
        parent: [`${namespace}/jobs-container`],
		edit: class extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    jobs: [], 
                    error: false,
                }
            }
            async componentDidMount() {
                if (ajaxInfo.greenhouseAPIKey !== '' && ajaxInfo.greenhouseURL !== '') {
                    try {
                        const resp = await fetch(`${ajaxInfo.greenhouseURL}/jobs?content=true`, {
                            method: 'GET',
                            headers: {
                                'Authorization': `Basic ${ajaxInfo.greenhouseAPIKey}`
                            }
                        })
                        const data = await resp.json();
                        if (data.jobs && data.jobs.length > 0) {
                            const options = data.jobs.map((job) => {
                                return {
                                    label: job.title,
                                    value: job.id
                                }
                            })
                            options.unshift({ label: "Select", value: 0 })
                            this.setState({ jobs: options });
                        }
                    } catch(err) {
                        this.setState({ error: true });
                    }
                } else {
                    this.setState({ error: true })
                }
                
            }
            render() {
                const { attributes, setAttributes } = this.props;
                const { job_id } = attributes;
                return (
                    <div class="custom-component">
                        <p className="block-title">Select A Job</p>
                        {
                        this.state.jobs && this.state.jobs.length > 0 && !this.state.error ?
                            <SelectControl
                                label={'Select Job'}
                                value={ Number(job_id) > 0 ? job_id : 0 }
                                options={this.state.jobs}
                                onChange={(id) => {
                                    setAttributes({job_id: id });
                                }}
                            />
                            : 
                            <p>No jobs found</p>
                        }    
                        { 
                            this.state.error &&
                            <p>Something's gone wrong. Check Theme Settings to make sure both URL and API Key are correct</p>
                        }
                    </div>
                )
            }
		},
		save: ({ attributes }) => {
			const { job_id } = attributes;
            return;
		},
	});
}