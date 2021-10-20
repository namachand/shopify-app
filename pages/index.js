import React, { useState } from "react";
import { Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";

const Index = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <Page
            title={"Shipify 🎉"}
            primaryAction={{
                content: "Add Shipping",
                onAction: () => setOpen(true),
            }}
        >
            <ResourcePicker
                resourceType={"Product"}
                open={isOpen}
                onCancel={() => setOpen(false)}
            />
        </Page>
    );
};

export default Index;
